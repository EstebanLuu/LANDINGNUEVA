import { motion } from 'motion/react'
import * as variants from '@/motionVariats'
import { featureData, processData } from '@/constants'
import { processBanner } from '@/assets'


const index = () => {
    return (
        <section className='section'>
            <div className="container">
                <div className="section-head">
                    <motion.p
                        variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-subtitle'>
                        {processData.sectionSubtitle}
                    </motion.p>

                    <motion.h2 variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-title'>{processData.sectionTitle}</motion.h2>

                    <motion.p
                        variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-text'>
                        {processData.sectionText}
                    </motion.p>
                </div>

                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                    <div className="grid gap-7 lg:gap-10 ">
                        {processData.list.map((ele, ind) =>
                            <motion.div
                                variants={variants.staggerContainer}
                                initial='start'
                                whileInView='end'
                                viewport={{ once: true }}
                                className='flex flex-col gap-4 md:flex-row lg:gap-7'
                                key={ind}>
                                <motion.div
                                    variants={variants.fadeInScale}
                                    className='w-16 h-16 grid place-items-center rounded-full border border-foreground/5 shrink-0'>{ele.icon}</motion.div>

                                <div className="grid gap-2 md:gap-3">
                                    <motion.h3
                                        variants={variants.fadeInLeft}
                                        className='text-xl lg-text-2xl '>
                                        {ele.title}
                                    </motion.h3>

                                    <motion.p
                                        variants={variants.fadeInLeft}

                                        className='text-sm text-muted-foreground md:text-base'>
                                        {ele.text}
                                    </motion.p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className="max-lg:-order-1 relative">
                        <motion.figure
                            variants={variants.fadeInUp}
                            initial="start"
                            whileInView="end"
                            viewport={{ once: true }}
                            className="mx-auto rounded-3xl max-w-[580px] overflow-hidden p-8 !pb-0 lg:p-12 relative"
                        >
                            <img className="w-full h-full object-contain object-bottom" src={processBanner} width={500} height={528} alt="" />
                        </motion.figure>

                        {/* Sombra */}
                        <motion.div
                            initial={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                ease: "backInOut",
                            }}
                            className="absolute bg-primary/60 inset-5 blur-[50px] -z-10"
                        ></motion.div>

                        <motion.div
                            initial={{
                                scale: 0.4,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 1.5,
                                ease: "backOut",
                            }}
                            className="absolute inset-0 bg-primary/5 blur-[500px] scale-y-75 scale-x-125 rounded-full -z-10"
                        ></motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default index