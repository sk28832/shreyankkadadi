import Link from 'next/link'
import Header from '@/components/Header'
import * as RadixIcons from '@radix-ui/react-icons'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { GiBearFace, GiBee, GiHealthNormal } from 'react-icons/gi';
import { FaCarAlt, FaEye } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlineStock } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import "animate.css";

export default function Experience() {
    return (
        <div>
            <Header />
            <div className="animate__animated animate__fadeIn animate__faster">
                <section className="container px-4 md:px-6 mx-auto py-3 lg:py-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <Card>
                            <CardHeader className='text-center'>
                                <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    work experience
                                </CardTitle>
                                <CardDescription className={cn('text-muted-foreground')}>
                                    i&apos;ve worked at...
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <GoLaw className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <a href="https://www.tryswiftlaw.com/" className="font-bold underline text-primary">swiftlaw,</a>{' '}
                                                    cofounder
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2024 - present
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            building an ai-enabled client terminal for modern law firms.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <FaEye className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <a href="https://www.aiandeye.com/" className="font-bold underline text-primary">ai and eye,</a>{' '}
                                                    director of r&amp;d
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2021 - present
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            501(c)(3) research and charity organization focused on deploying innovative ai solutions for optical diseases to rural villages in south india.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <GiHealthNormal className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <span className="font-bold">
                                                        epic systems,
                                                    </span>{' '}
                                                    software engineer
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2023 - 2024
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            led the development of a project for the team that developed the{' '}
                                            <a
                                                href="https://www.forbes.com/sites/katiejennings/2024/03/18/why-46-billion-health-records-giant-epic-is-betting-big-on-generative-ai/?sh=172ac6806d5b"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline text-primary"
                                            >
                                                AI coding assistant
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <LuBrainCircuit className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <span className="font-bold">
                                                        neural dynamics group,
                                                    </span>{' '}
                                                    software lead
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2021 - 2023
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            developed a <a href="https://pypi.org/project/fis-calculator/" className="underline text-primary">library</a> for neural protein-protein interaction analysis. wrote an <a href="https://drive.google.com/file/d/17Ismda870Jtf5IZygMZFaoW90AOHsFo-/view?usp=sharing" className="underline text-primary">honors thesis</a> and presented at the ucla computational biology research symposium
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <FaCarAlt className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <span className="font-bold">
                                                        qualcomm,
                                                    </span>{' '}
                                                    software engineering intern
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2022
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            developed end-to-end autonomous driving pipelines and implemented a comprehensive unit test framework still in use in cars today.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <AiOutlineStock className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <a href="https://bruinstockgroup.wixsite.com/ucla" className="font-bold underline text-primary">bruin stock group,</a>{' '}
                                                    quant intern
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2021 - 2022
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            crafted investment strategies forecasting future performance of 30+ US equities, contributing to a 15% annualized return on the $800K student-run portfolio.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className='text-center'>
                                <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    education
                                </CardTitle>
                                <CardDescription className={cn('text-muted-foreground')}>
                                    i&apos;ve studied at...
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <GiBee className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <a href="https://www.gatech.edu/" className="font-bold underline text-primary">georgia tech,</a>{' '}
                                                    m.s. computer science 
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2025 (expected)
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            studied a lot of computer science and ai stuff.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-100 rounded-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                                <GiBearFace className="h-5 w-5 text-primary" />
                                                <h2 className="text-xl">
                                                    <a href="https://www.ucla.edu/" className="font-bold underline text-primary">ucla,</a>{' '}
                                                    b.s. computer science + biology
                                                </h2>
                                            </div>
                                            <p className={cn('text-sm', 'text-muted-foreground')}>
                                                2023
                                            </p>
                                        </div>
                                        <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                            studied a lot of cool computer science and biology stuff.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}