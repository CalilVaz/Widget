import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de bug'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de ideia'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        {feedbackSent ? <FeedbackSucessStep onFeedbackRestartRequersted={handleRestartFeedback}/> : (
            <>
                {!feedbackType ? (
            <FeedbackTypeStep
            onFeedbackTypeChanged={setFeedbackType}/>
        ) : (
            <FeedbackContentStep
             feedbackType={feedbackType}
             onFeedbackRestartRequested={handleRestartFeedback}
             onFeedbackSent={() => setFeedbackSent(true)}
             />
        )
        }
            </>
        )}

        <footer className="mt-4 text-xs text-neutral-400">
            Feito por Calil Vaz
        </footer>

        </div>
    )
}