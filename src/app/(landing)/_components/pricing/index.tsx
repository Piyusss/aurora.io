import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check } from "@/icons"
import Link from "next/link"

type Props = {}

export const PricingSection = (props: Props) => {
  return (
    <div className="w-full pt-20 flex flex-col items-center gap-3" id="pricing">
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <GradientText
          className="text-4xl font-semibold text-center"
          element="H2"
        >
          Premium Plans Just for You
        </GradientText>
        <p className="text-sm md:text-center text-left text-muted-foreground">
          Aurora.io is a dynamic community platform that enables individuals to
          connect, <br className="hidden md:block" />
          collaborate, and build lasting relationships.
        </p>
      </BackdropGradient>

      <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
        <div className="flex flex-col gap-2">
          <CardTitle>$79/month</CardTitle>
          <CardDescription className="text-[#B4B0AE]">
            Great for starting your journey
          </CardDescription>
          <Link href="#" className="w-full mt-3">
            <Button
              variant="default"
              className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
            >
              Go Free
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
          <p>Features</p>
          <span className="flex gap-2 mt-3 items-center">
            <Check />
            Node based text editor like notion
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Create custom likes and comments on posts
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Pagination with infinite scroll
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Dashboard to see group metrics
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Custom onboarding to increase conversions
          </span>
        </div>
      </Card>

      <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
        <div className="flex flex-col gap-2">
          <CardTitle>$149/month</CardTitle>
          <CardDescription className="text-[#B4B0AE]">
            Excellent for Professionals
          </CardDescription>
          <Link href="#" className="w-full mt-3">
            <Button
              variant="default"
              className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
            >
              Go Cart
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
          <p>Features</p>
          <span className="flex gap-2 mt-3 items-center">
            <Check />
            Node based text editor like notion
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Create custom likes and comments on posts
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Pagination with infinite scroll
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Dashboard to see group metrics
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Custom onboarding to increase conversions
          </span>
        </div>
      </Card>

      <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
        <div className="flex flex-col gap-2">
          <CardTitle>$209/month</CardTitle>
          <CardDescription className="text-[#B4B0AE]">
            Outstanding for Business and Startups
          </CardDescription>
          <Link href="#" className="w-full mt-3">
            <Button
              variant="default"
              className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
            >
              Go Cart
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
          <p>Features</p>
          <span className="flex gap-2 mt-3 items-center">
            <Check />
            Node based text editor like notion
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Create custom likes and comments on posts
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Pagination with infinite scroll
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Dashboard to see group metrics
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Custom onboarding to increase conversions
          </span>
        </div>
      </Card>


    </div>
  )
}
