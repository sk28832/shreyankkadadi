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

export default function Experience() {
    return (
        <div>
            <Header />
            <section className="container px-4 md:px-6 mx-auto py-3 lg:py-6">
                <div className="max-w-3xl mx-auto space-y-12">
                    <Card>
                        <CardHeader className='text-center'>
                            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                work experience
                            </CardTitle>
                            <CardDescription className={cn('text-muted-foreground')}>
                                i've worked at...
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <GoLaw className="h-5 w-5 text-primary" />
                                        <a href="https://www.tryswiftlaw.com/" className="underline text-primary">swiftlaw</a>
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        cofounder - 2024 - present
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    building an ai-enabled client terminal for modern law firms.
                                </p>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <FaEye className="h-5 w-5 text-primary" />
                                        <a href="https://www.aiandeye.com/" className="underline text-primary">ai and eye</a>
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        director of research and development - 2021-present
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    501(c)(3) research and charity organization focused on deploying innovative ai solutions for optical diseases to rural villages in south india.
                                </p>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <GiHealthNormal className="h-5 w-5 text-primary" />
                                        epic systems
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        software engineer - 2023-2024
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
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <LuBrainCircuit className="h-5 w-5 text-primary" />
                                        neural dynamics group
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        lead software engineer - 2021 - 2023
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    developed a <a href="https://pypi.org/project/fis-calculator/" className="underline text-primary">library</a> for neural protein-protein interaction analysis. wrote an <a href="https://drive.google.com/file/d/17Ismda870Jtf5IZygMZFaoW90AOHsFo-/view?usp=sharing" className="underline text-primary">honors thesis</a> and presented at the ucla computational biology research symposuim
                                </p>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <FaCarAlt className="h-5 w-5 text-primary" />
                                        qualcomm
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        software engineering intern - 2022
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    developed end-to-end autonomous driving pipelines and implemented a comprehensive unit test framework still in use in cars today.
                                </p>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <AiOutlineStock className="h-5 w-5 text-primary" />
                                        <a href="https://bruinstockgroup.wixsite.com/ucla" className="underline text-primary">bruin stock group</a>
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        quantitative development intern - 2021 - 2022
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    crafted investment strategies forecasting future performance of 30+ US equities, contributing to a 15% annualized return on the $800K student-run portfolio.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='text-center'>
                            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                education
                            </CardTitle>
                            <CardDescription className={cn('text-muted-foreground')}>
                                i've studied at...
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <GiBee className="h-5 w-5 text-primary" />
                                        georgia tech
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        m.s. computer science (machine learning specialization) - 2025 (expected)
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    studied a lot of computer science and ai stuff.
                                </p>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <GiBearFace className="h-5 w-5 text-primary" />
                                        ucla
                                    </h2>
                                    <p className={cn('text-sm', 'text-muted-foreground')}>
                                        b.s. computer science + biology - 2023
                                    </p>
                                </div>
                                <p className={cn('max-w-[700px]', 'text-muted-foreground')}>
                                    studied a lot of cool computer science and biology stuff.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}