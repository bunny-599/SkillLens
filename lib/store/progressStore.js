import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProgressStore = create(
  persist(
    (set, get) => ({
      // Progress data
      userProgress: {}, // { roadmapId: { weekId: { completed: true, date: "2025-01-15" } } }
      _hasHydrated: false, // Add this flag
     
      // Add hydration setter
      setHasHydrated: (state) => {
        set({ _hasHydrated: state });
      },
     
      // Actions
      toggleWeekCompletion: (roadmapId, weekIndex) => {
        const state = get();
        const roadmapProgress = state.userProgress[roadmapId] || {};
        const weekKey = `week${weekIndex + 1}`;
        const currentStatus = roadmapProgress[weekKey]?.completed || false;
       
        // Only generate dates on client side
        const now = typeof window !== 'undefined' ? new Date() : null;
       
        set({
          userProgress: {
            ...state.userProgress,
            [roadmapId]: {
              ...roadmapProgress,
              [weekKey]: {
                completed: !currentStatus,
                date: now ? now.toISOString().split('T')[0] : null,
                updatedAt: now ? now.toISOString() : null
              }
            }
          }
        });
      },
     
      getWeekProgress: (roadmapId, weekIndex) => {
        const state = get();
        const weekKey = `week${weekIndex + 1}`;
        return state.userProgress[roadmapId]?.[weekKey] || { completed: false };
      },
     
      getRoadmapProgress: (roadmapId, totalWeeks) => {
        const state = get();
        const roadmapProgress = state.userProgress[roadmapId] || {};
        const completedWeeks = Object.values(roadmapProgress).filter(week => week.completed).length;
        return {
          completed: completedWeeks,
          total: totalWeeks,
          percentage: Math.round((completedWeeks / totalWeeks) * 100)
        };
      }
    }),
    {
      name: 'roadmap-progress',
      onRehydrateStorage: (state) => {
        return (state, error) => {
          if (error) {
            console.log('An error occurred during hydration', error);
          } else {
            state.setHasHydrated(true);
          }
        };
      },
    }
  )
);

export default useProgressStore;