import { motion } from 'framer-motion';

function FadeContainer({ fade, children }) {
	return (
		<motion.div
			className="fade-image"
			initial={{ opacity: 1 }} // Inicia con opacidad 1
			animate={{ opacity: fade ? 0 : 1 }} // Anima la opacidad según el estado `fade`
			transition={{ duration: 0.5 }} // Duración de la transición
		>
			{children}
		</motion.div>
	);
}

export default FadeContainer;
