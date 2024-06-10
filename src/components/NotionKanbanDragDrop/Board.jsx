import { useState } from "react"
import Column from "./Column";
import { boardData } from "./dummyBoardData";
import BurnBarrel from "./BurnBarrel";

const Board = () => {
    const [cards, setCards] = useState(boardData);

    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            <Column 
                title="Backlog" 
                headingColor="text-neutral-500" 
                column="backlog" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Todo" 
                headingColor="text-yellow-200" 
                column="todo" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="In progress" 
                headingColor="text-blue-200" 
                column="doing" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Complete" 
                headingColor="text-emerald-200" 
                column="done" 
                cards={cards} 
                setCards={setCards} 
            />
            <BurnBarrel setCards={setCards} />
        </div>
    )
}

export default Board