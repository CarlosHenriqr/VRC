import { CheckCircle2, Circle, CircleDashed, Lock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { barGrow, mockupContainer, mockupItem } from "@/lib/motion";

interface Project {
  name: string;
  progress: number;
  status: "Done" | "Active" | "Planned";
}

interface Task {
  title: string;
  assignee: string;
  state: "done" | "active" | "todo";
}

interface Activity {
  initials: string;
  text: string;
  time: string;
}

const PROJECTS: Project[] = [
  { name: "Meridian Logistics OS", progress: 92, status: "Active" },
  { name: "Harbor Claims Engine", progress: 100, status: "Done" },
  { name: "Atlas Procurement", progress: 64, status: "Active" },
  { name: "Lumen Scheduling", progress: 28, status: "Planned" },
];

const TASKS: Task[] = [
  { title: "Dispatch routing API", assignee: "DO", state: "done" },
  { title: "Audit log retention", assignee: "SL", state: "active" },
  { title: "Vendor sync worker", assignee: "MR", state: "active" },
  { title: "Role-based access", assignee: "AK", state: "todo" },
];

const ACTIVITY: Activity[] = [
  { initials: "SL", text: "merged PR #482 into main", time: "2m" },
  { initials: "DO", text: "closed “Routing latency”", time: "1h" },
  { initials: "MR", text: "deployed v2.4.0 to prod", time: "3h" },
];

const WEEKLY_THROUGHPUT = [40, 55, 48, 70, 62, 84, 76];

const STATUS_STYLES: Record<Project["status"], string> = {
  Done: "text-foreground",
  Active: "text-foreground",
  Planned: "text-muted",
};

const TASK_ICON = {
  done: CheckCircle2,
  active: CircleDashed,
  todo: Circle,
} as const;

function WindowDot() {
  return <span className="size-3 rounded-full border border-border bg-foreground/10" />;
}

/**
 * Realistic, minimal browser mockup of an internal operations dashboard.
 * No gradients, no floating widgets — just believable product UI.
 */
export function BrowserMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
      {/* Window chrome */}
      <div className="flex items-center gap-4 border-b border-border px-4 py-3">
        <div className="flex gap-2">
          <WindowDot />
          <WindowDot />
          <WindowDot />
        </div>
        <div className="flex h-7 flex-1 items-center gap-2 rounded-md border border-border bg-background px-3">
          <Lock className="size-3 text-muted" aria-hidden="true" />
          <span className="font-mono text-xs text-muted">app.nexusdigital.com</span>
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] text-sm sm:grid-cols-[170px_1fr]">
        {/* Sidebar */}
        <aside className="hidden flex-col gap-1 border-r border-border p-3 sm:flex">
          {["Overview", "Projects", "Tasks", "Reports", "Team"].map((item, i) => (
            <span
              key={item}
              className={cn(
                "rounded-md px-3 py-2 text-[13px]",
                i === 0 ? "bg-foreground/[0.06] text-foreground" : "text-muted",
              )}
            >
              {item}
            </span>
          ))}
        </aside>

        {/* Main panel */}
        <motion.div
          className="flex flex-col gap-5 p-4 sm:p-5"
          variants={mockupContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            variants={mockupItem}
            className="flex items-center justify-between"
          >
            <div>
              <p className="text-[13px] text-muted">Operations</p>
              <p className="text-base font-semibold text-foreground">Overview</p>
            </div>
            <span className="rounded-md border border-border px-2.5 py-1 text-xs text-muted">
              This week
            </span>
          </motion.div>

          {/* Stat row */}
          <motion.div variants={mockupItem} className="grid grid-cols-3 gap-3">
            {[
              { label: "Active", value: "12" },
              { label: "On track", value: "94%" },
              { label: "Overdue", value: "3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-background px-3 py-3"
              >
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Chart */}
          <motion.div
            variants={mockupItem}
            className="rounded-lg border border-border bg-background p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[13px] font-medium text-foreground">Throughput</p>
              <p className="text-xs text-muted">+18%</p>
            </div>
            <motion.div
              variants={mockupContainer}
              className="flex h-24 items-end gap-2"
            >
              {WEEKLY_THROUGHPUT.map((value, i) => (
                <motion.div
                  key={i}
                  variants={barGrow}
                  className={cn(
                    "flex-1 origin-bottom rounded-sm",
                    i === WEEKLY_THROUGHPUT.length - 1
                      ? "bg-foreground"
                      : "bg-foreground/20",
                  )}
                  style={{ height: `${value}%` }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={mockupItem} className="grid gap-5 lg:grid-cols-2">
            {/* Projects */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-medium text-foreground">Projects</p>
              <ul className="flex flex-col gap-3">
                {PROJECTS.map((project) => (
                  <li key={project.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-[13px] text-foreground">
                        {project.name}
                      </span>
                      <span
                        className={cn(
                          "shrink-0 text-xs",
                          STATUS_STYLES[project.status],
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-foreground/70"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tasks + activity */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-[13px] font-medium text-foreground">Tasks</p>
                <ul className="flex flex-col gap-2">
                  {TASKS.map((task) => {
                    const Icon = TASK_ICON[task.state];
                    return (
                      <li key={task.title} className="flex items-center gap-2.5">
                        <Icon
                          className={cn(
                            "size-3.5 shrink-0",
                            task.state === "done"
                              ? "text-foreground"
                              : "text-muted",
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            "flex-1 truncate text-[13px]",
                            task.state === "done"
                              ? "text-muted line-through"
                              : "text-foreground",
                          )}
                        >
                          {task.title}
                        </span>
                        <span className="grid size-5 place-items-center rounded-full border border-border text-[10px] text-muted">
                          {task.assignee}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[13px] font-medium text-foreground">Activity</p>
                <ul className="flex flex-col gap-2.5">
                  {ACTIVITY.map((item) => (
                    <li key={item.text} className="flex items-center gap-2.5">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full border border-border text-[10px] text-muted">
                        {item.initials}
                      </span>
                      <span className="flex-1 truncate text-[13px] text-muted">
                        {item.text}
                      </span>
                      <span className="shrink-0 text-xs text-muted">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
