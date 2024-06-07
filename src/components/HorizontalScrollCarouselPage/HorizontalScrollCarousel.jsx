import { useRef } from "react";
import Card from "./Card"
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollCarousel = ({ cardData }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const scrollX = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x: scrollX }} className="flex gap-4">
                    {
                        cardData.map(card => 
                            <Card key={card.id} card={card} />
                        )
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollCarousel
