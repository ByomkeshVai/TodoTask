import { useState } from "react";
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
import { setFiltering } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";

const TodoFilter = () => {
  const [priorityFilter, setPriorityFilter] = useState("");
  const dispatch = useAppDispatch();

  const handleFilterChange = (value: string) => {
    setPriorityFilter(value);
    dispatch(setFiltering(value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">
          {priorityFilter ? priorityFilter : "Filter"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={priorityFilter}
          onValueChange={handleFilterChange}
        >
          <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
