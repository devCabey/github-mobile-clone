import {
  Feather,
  FontAwesome5,
  Ionicons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

export default [
  {
    name: "Issues",
    icon: <FontAwesome5 name="dot-circle" size={18} color="white" />,
    color: "#2ff53f",
    route: "Issue",
  },
  {
    name: "Pull Requests",
    icon: <Ionicons name="git-pull-request" size={18} color="white" />,
    color: "#2f92f5",
    route: "PullRequest",
  },
  {
    name: "Discussions",
    icon: <Octicons name="comment-discussion" size={18} color="white" />,
    color: "#9c2ff5",
    route: "Discussion",
  },
  {
    name: "Repositories",
    icon: <Feather name="book" size={18} color="white" />,
    color: "#716f73",
    route: "Repository",
  },
  {
    name: "Organizations",
    icon: <Octicons name="organization" size={18} color="white" />,
    color: "#f5952f",
    route: "Organization",
  },
  {
    name: "Starred",
    icon: <AntDesign name="star" size={18} color="white" />,
    color: "#fad102",
    route: "Starred",
  },
];
