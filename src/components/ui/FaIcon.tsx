import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/cn";

type Props = {
  icon: IconDefinition;
  className?: string;
};

export function FaIcon({ icon, className }: Props) {
  return <FontAwesomeIcon icon={icon} className={cn(className)} />;
}
