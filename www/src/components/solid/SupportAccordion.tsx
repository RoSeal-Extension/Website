import { For } from "solid-js";
import { supportQuestions } from "../../data/support";
import Accordion, {
	AccordionContent,
	AccordionHeader,
	AccordionItem,
} from "./Accordion";

export default function SupportAccordion() {
	return (
		<Accordion class="support-accordion">
			<For each={supportQuestions}>
				{(question) => (
					<AccordionItem key={question.question}>
						<AccordionHeader>
							<span class="support-accordion-title">
								{question.question}
							</span>
						</AccordionHeader>
						<AccordionContent>{question.answer}</AccordionContent>
					</AccordionItem>
				)}
			</For>
		</Accordion>
	);
}
