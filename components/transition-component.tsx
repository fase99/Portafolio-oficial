"use client"

import { motion } from "framer-motion";
// If 'motion-transitions.ts' is in 'utils' folder at the project root, use:
import { fadeIn } from "../utils/motion-transitions";
// Or adjust the path as needed based on your folder structure.

export type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: 'right' | 'bottom'
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position } = props

    return (
        <motion.div
           
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}