import { blogData } from '@/constants'
import * as variants from '@/motionVariats'
import { motion } from 'motion/react'
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Badge } from '../ui/badge'

const index = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-head">
                    <motion.p
                        variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-subtitle'>
                        {blogData.sectionSubtitle}
                    </motion.p>

                    <motion.h2 variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-title'>{blogData.sectionTitle}</motion.h2>

                    <motion.p
                        variants={variants.fadeInUp}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                        className='section-text'>
                        {blogData.sectionText}
                    </motion.p>
                </div>

                <motion.div
                    variants={variants.staggerContainer}
                    initial='start'
                    whileInView='end'
                    viewport={{ once: true }}
                    className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                    {blogData.blogs.map((ele, ind) =>
                        <motion.div
                            variants={variants.fadeInUp}
                            key={ind}>
                            <Card className='group'>
                                <CardHeader>
                                    <figure className='rounded-lg overflow-hidden'>
                                        <img
                                            src={ele.imgSrc}
                                            alt={ele.title}
                                            className='img-cover group-hover:scale-105 transition-transform duration-500'
                                        />
                                    </figure>
                                </CardHeader>

                                <CardContent>
                                    <Badge className='mb-3'>{ele.badge}</Badge>

                                    <CardTitle className='leading-normal'>
                                        <a className='hover:text-primary transition-colors' href="#">{ele.title}</a>
                                    </CardTitle>
                                </CardContent>

                                <CardFooter className='gap-3'>
                                    <Avatar>
                                        <AvatarImage src={ele.author.avatarSrc} />
                                        <AvatarFallback>{ele.author.authorName}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-sm mb-0.5'>{ele.author.authorName}</p>

                                        <div className='flex items-center gap-1.5'>
                                            <time dateTime={ele.author.publishDate} className='text-xs text-muted-foreground'>{ele.author.publishDate}</time>

                                            <span className='w-1 h-1 bg-muted-foreground/50 rounded-full'></span>

                                            <p className='text-xs  text-muted-foreground'>{ele.author.readingTime}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default index