import { FC } from "react";
import InputText from "../input/InputText";
import Button from "../button/Button";


type TaskCreatorProps = {
    id: number
}

const TaskCreator: FC<TaskCreatorProps> = ({
    id,
}) => {
    return (
        <div className="max-w-[400px] bg-[#212121] p-4 w-full border border-transparent rounded-4xl flex flex-col gap-20">
            <div className="flex flex-col gap-8 text-start">
                <div className="">
                    <p className="text-white font-bold text-2xl">Create Task</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#878787]">Title</p>
                    <InputText placeholder="Enter text..." variant="TEXT"></InputText>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[#878787]">Description</p>
                    <InputText placeholder="Enter text..." variant="DESCRIPTION"></InputText>
                </div>

            </div>
            <div>
                <Button text="Cancel" url="" variant="SECONDARY"></Button>
                <Button text="Save Task" url="" variant="PRIMARY"></Button>
            </div>
        </div>
    )
}

export default TaskCreator;