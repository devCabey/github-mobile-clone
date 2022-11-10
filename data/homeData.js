import {
  Feather,
  FontAwesome5,
  Ionicons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

export default [
  {
    id: 1,
    name: "Issues",
    icon: <FontAwesome5 name="dot-circle" size={18} color="white" />,
    color: "#2ff53f",
    select: true,
    route: "Issue",
  },
  {
    id: 2,
    name: "Pull Requests",
    icon: <Ionicons name="git-pull-request" size={18} color="white" />,
    color: "#2f92f5",
    select: true,
    route: "Pull Request",
  },
  {
    id: 3,
    name: "Discussions",
    icon: <Octicons name="comment-discussion" size={18} color="white" />,
    color: "#9c2ff5",
    select: true,
    route: "Discussion",
  },
  {
    id: 4,
    name: "Repositories",
    icon: <Feather name="book" size={18} color="white" />,
    color: "#2b2b2b",
    select: true,
    route: "Repository",
  },
  {
    id: 5,
    name: "Organizations",
    icon: <Octicons name="organization" size={18} color="white" />,
    color: "#f5952f",
    select: true,
    route: "Organization",
  },
  {
    id: 6,
    name: "Starred",
    icon: <AntDesign name="star" size={18} color="white" />,
    color: "#fad102",
    select: true,
    route: "Starred",
  },
];
