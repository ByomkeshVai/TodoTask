import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TTodoFilter } from "@/redux/features/todoSlice";
import { Dispatch } from "react";

type TTodofilterProps = {
  priority: TTodoFilter;
  setPriority: Dispatch<React.SetStateAction<TTodoFilter>>;
};

const TodoFilter = ({ priority, setPriority }: TTodofilterProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={priority}
          onValueChange={(value) => setPriority(value as TTodoFilter)}
        >
          <DropdownMenuRadioItem value="ALL">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="HIGH">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="MEDIUM">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="LOW">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
