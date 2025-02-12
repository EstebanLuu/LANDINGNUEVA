import { motion } from 'motion/react'
import { overviewData } from '@/constants'
import * as variants from '@/motionVariats'


const index = () => {
    return (
        <section className='section'>
            <div className='container'>
                <div className="section-head">
                    <motion.p
                        variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-subtitle'>
                        {overviewData.sectionSubtitle}
                    </motion.p>

                    <motion.h2 variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-title'>{overviewData.sectionTitle}</motion.h2>

                    <motion.p
                        variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-text'>
                        {overviewData.sectionText}
                    </motion.p>
                </div>

                <div className='max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr,2.5fr] xl:items-center'>
                    <motion.p
                        variants={variants.fadeInRight}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'>
                        {overviewData.listTitle}
                    </motion.p>

                    <motion.div
                        variants={variants.staggerContainer}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'>
                        {overviewData.list.map((ele, ind) =>
                            <motion.div
                                variants={variants.fadeInLeft}
                                key={ind}
                                className='text-center'
                            >
                                <h3 className='text-3xl'>{ele.title}</h3>

                                <p className='text-muted-foreground'>{ele.text}</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default index