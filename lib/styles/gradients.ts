// Shared gradient configurations
export const gradients = {
  radial: {
    primary: "bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.06)_0%,rgba(0,0,0,0)_70%)]",
    secondary: "bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,rgba(0,0,0,0)_70%)]",
  },
  linear: {
    card: "bg-gradient-to-r from-violet-500/5 via-transparent to-violet-500/5",
    text: "bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent",
    hover: "hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-transparent",
  },
  overlay: {
    card: "bg-background/50 backdrop-blur-sm border-violet-500/10",
    subtle: "bg-gradient-to-tr from-violet-500/10 to-transparent",
  }
};