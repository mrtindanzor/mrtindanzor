"use client"

import { sendMessage } from "@/app/actions/sendMessage"
import { cn } from "@/lib/utils"
import { ComponentProps, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import Message from "./Message"
import { IconType } from "react-icons"
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

type ContactData = {
  name: string
  email: string
  phone: number
  message: string
  honeypot?: string
}

const formVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut" as const,
      staggerChildren: 0.2,
    },
  },
}

const formItemVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut" as const,
    },
  },
}
const submitVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut" as const,
    },
  },
}

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>()

  const handleMessage = useCallback(
    async (payload: ContactData) => {
      setSuccess(false)
      const { name, email, phone, message, honeypot } = payload

      if (honeypot)
        return setError("root", {
          message: "Message could not be sent at the moment, try again later.",
        })

      if (!name) return setError("name", { message: "Please add your name" })

      if (!email && !phone) {
        setError("email", { message: "Please add an email address" })
        setError("phone", { message: "Please add a phone number" })
        return
      }

      if (phone && String(phone).length < 9)
        return setError("phone", { message: "Enter a vaild phone number" })

      if (!message || message.length < 10)
        return setError("message", { message: "Enter a valid message" })

      const res = await sendMessage(payload)
      if (res.status === 201) {
        setSuccess(true)
        reset()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      setError("root", { message: res.message })
    },
    [setError, reset]
  )

  return (
    <motion.section
      className="grid gap-6 px-3 sm:px-8 py-10 bg-slate-800 backdrop-blur-3xl max-w-xl mx-auto w-full sm:rounded-md"
      variants={formVariants}
      initial="hidden"
      whileInView="show"
    >
      <h2 className="text-sky-400 text-center text-3xl font-sans font-bold">
        Message Me
      </h2>
      {errors.root?.message && (
        <Message message={errors.root.message} success={success} />
      )}
      <form onSubmit={handleSubmit(handleMessage)} className="grid gap-4">
        <TextField
          title="Name"
          id="name"
          {...register("name")}
          icon={UserIcon}
          placeholder="Enter your name"
        >
          {errors.name?.message && (
            <Message message={errors.name.message} success={success} />
          )}
        </TextField>
        <TextField
          title="Phone"
          id="phone"
          {...register("phone")}
          icon={PhoneIcon}
          placeholder="Enter your phone number"
        >
          {errors.phone?.message && (
            <Message message={errors.phone.message} success={success} />
          )}
        </TextField>
        <TextField
          title="Email"
          id="email"
          {...register("email")}
          icon={EnvelopeIcon}
          placeholder="Enter your email address"
        >
          {errors.email?.message && (
            <Message message={errors.email.message} success={success} />
          )}
        </TextField>
        <TextField
          title="pot"
          id="pot"
          {...register("honeypot")}
          autoComplete="off"
          className="!hidden"
          icon={PhoneIcon}
        />
        <TextArea
          title="Message"
          id="message"
          {...register("message")}
          placeholder="Your message"
        >
          {errors.message?.message && (
            <Message message={errors.message.message} success={success} />
          )}
        </TextArea>
        <motion.button
          disabled={isSubmitting}
          className="bg-sky-600 text-lg hover:bg-sky-800 text-white font-medium ease-in-out duration-500 transition rounded-md py-2 px-2"
          variants={submitVariant}
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  )
}

function TextField({
  title,
  id,
  icon: Icon,
  className,
  children,
  ...props
}: { title: string; icon: IconType } & ComponentProps<"input">) {
  return (
    <motion.div
      className={cn(className, "grid gap-2 relative")}
      variants={formItemVariant}
    >
      <label htmlFor={id} className="text-white text-lg font-medium">
        {title}
      </label>
      <div className="relative w-full grid">
        <input
          {...props}
          className="rounded-sm border-1 border-gray-300/10 py-2 pl-10 pr-3 text-gray-200 bg-slate-700"
        />
        <Icon
          className={cn("absolute left-2 bottom-2.5 text-white/50 size-5")}
        />
      </div>
      {children}
    </motion.div>
  )
}

function TextArea({
  title,
  id,
  className,
  children,
  ...props
}: { title: string } & ComponentProps<"textarea">) {
  return (
    <motion.div
      className={cn(className, "grid h-fit gap-2")}
      variants={formItemVariant}
    >
      <label htmlFor={id} className="text-white text-lg font-medium">
        {title}
      </label>
      <textarea
        {...props}
        className="rounded-sm min-h-30 bg-slate-700 text-gray-200 border-1 border-gray-300/10 px-4 py-2"
      />
      {children}
    </motion.div>
  )
}
