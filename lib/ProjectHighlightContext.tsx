'use client';

import React, { createContext, useContext, useState } from 'react';

type ProjectHighlightContextType = {
  highlightedProjectIds: string[] | null;
  setHighlightedProjectIds: (ids: string[] | null) => void;
};

const ProjectHighlightContext = createContext<ProjectHighlightContextType>({
  highlightedProjectIds: null,
  setHighlightedProjectIds: () => {},
});

export function ProjectHighlightProvider({ children }: { children: React.ReactNode }) {
  const [highlightedProjectIds, setHighlightedProjectIds] = useState<string[] | null>(null);

  return (
    <ProjectHighlightContext.Provider value={{ highlightedProjectIds, setHighlightedProjectIds }}>
      {children}
    </ProjectHighlightContext.Provider>
  );
}

export function useProjectHighlight() {
  return useContext(ProjectHighlightContext);
}
