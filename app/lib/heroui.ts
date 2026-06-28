"use client";

// HeroUI's global "@heroui/react" barrel does not include a "use client"
// directive, so importing it directly from a Server Component evaluates
// client-only code (e.g. createContext) in the RSC environment. Re-exporting
// the components through this client-boundary module lets Server Components
// (which may also export `metadata`) use them safely.
export {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
  Spacer,
  Tooltip,
} from "@heroui/react";
