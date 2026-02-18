export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "task-tracker",
    title: "Task Tracker",
    description:
      "A simple web app to create, organize, and complete daily tasks with a clean UI.",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    link: "https://example.com/task-tracker",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Displays current weather and forecasts by city using a third-party weather API.",
    tech: ["React", "REST API", "Jest"],
    link: "https://example.com/weather-dashboard",
  },
  {
    id: "budget-planner",
    title: "Budget Planner",
    description:
      "Tracks income and expenses with monthly summaries and category breakdowns.",
    tech: ["Next.js", "Data Visualization", "Local Storage"],
    link: "https://example.com/budget-planner",
  },
];
