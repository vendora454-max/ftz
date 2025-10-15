"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen, Target, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <motion.section
        className="bg-primary py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl text-balance">About Formed Rwanda</h1>
            <p className="text-lg text-white/90 leading-relaxed text-pretty">
              A Christian charitable organization dedicated to spreading the gospel and transforming lives across Rwanda
              through faith, generosity, and community outreach.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn}>
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To spread the gospel of Jesus Christ and transform lives through faith-based community outreach,
                    biblical teaching, and charitable support. We are committed to reaching the lost, strengthening
                    believers, and serving those in need across Rwanda.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-destructive/10 p-3">
                    <Heart className="h-8 w-8 text-destructive" fill="currentColor" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To see Rwanda transformed by the power of the gospel, with thriving communities of believers who live
                    out their faith through generosity, compassion, and service. We envision a nation where the love of
                    Christ is evident in every community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-foreground text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Formed Rwanda was born out of a deep conviction that the gospel has the power to transform lives and
                communities. Founded by a group of passionate believers who witnessed firsthand the impact of
                faith-based ministry, we began with a simple mission: to share the love of Christ with those who need it
                most.
              </p>
              <p>
                What started as small community gatherings has grown into a comprehensive ministry that reaches
                thousands across Rwanda. Through gospel outreach, biblical teaching, community support, and charitable
                giving, we've seen countless lives transformed by the power of God.
              </p>
              <p>
                Our name, "Formed Rwanda," reflects our belief that God is actively forming and shaping our nation
                through His people. As stated in Proverbs 22:9, "The generous will themselves be blessed, for they share
                their food with the poor." This verse guides our approach to ministry - we believe that as we give
                generously of our time, resources, and love, God blesses both the giver and the receiver.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-3xl font-bold text-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                icon: BookOpen,
                title: "Biblical Truth",
                description: "We are committed to teaching and living according to God's Word",
                color: "bg-primary/10"
              },
              {
                icon: Heart,
                title: "Generosity",
                description: "We believe in giving freely as God has given to us",
                color: "bg-destructive/10"
              },
              {
                icon: Users,
                title: "Community",
                description: "We value authentic relationships and fellowship",
                color: "bg-secondary/20"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in all we do for God's glory",
                color: "bg-primary/10"
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all h-full group">
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${value.color} group-hover:scale-110 transition-transform`}>
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="bg-primary py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Join Us in Our Mission
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Whether through volunteering, giving, or prayer, there are many ways to partner with us in spreading the
              gospel and transforming lives.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/donate">
                  Make a Donation
                  <Heart className="ml-2 h-4 w-4" fill="currentColor" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 shadow-lg transition-all"
              >
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
