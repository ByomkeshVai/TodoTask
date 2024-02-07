import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";

const priorities = [
  {
    value: "High",
    label: "High",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Low",
    label: "Low",
  },
];

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      id: randomString,
      title: task,
      description: description,
      priority: priority,
    };
    dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {priority ? priority : "Set Priority"}
                    <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search Priority..." />
                    <CommandEmpty>No Priority found.</CommandEmpty>
                    <CommandGroup>
                      {priorities.map((values) => (
                        <CommandItem
                          key={values.value}
                          value={values.value}
                          onSelect={(currentValue) => {
                            setPriority(
                              currentValue === priority ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              priority === values.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {values.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
