"use client"

import { sendMessage } from "@/app/actions/sendMessage"
import { cn } from "@/lib/utils"
import { ComponentProps, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import Message from "./Message"

type ContactData = {
  name: string
  email: string
  phone: number
  message: string
  honeypot?: string
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
      }
      setError("root", { message: res.message })
    },
    [setError, reset]
  )

  return (
    <section className="bg-stone-800 grid gap-6 px-3 sm:px-10 py-20 ">
      <h2 className="text-white text-2xl font-sans font-bold">
        Get in touch with me!
      </h2>
      {errors.root?.message && (
        <Message message={errors.root.message} success={success} />
      )}
      <form
        onSubmit={handleSubmit(handleMessage)}
        className="grid md:grid-cols-2 col-start-1 gap-4"
      >
        <TextField title="Name" id="name" {...register("name")}>
          {errors.name?.message && (
            <Message message={errors.name.message} success={success} />
          )}
        </TextField>
        <TextField
          title="Phone"
          id="phone"
          {...register("phone", {
            valueAsNumber: true,
          })}
        >
          {errors.phone?.message && (
            <Message message={errors.phone.message} success={success} />
          )}
        </TextField>
        <TextField title="Email" id="email" {...register("email")}>
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
        />
        <TextArea
          title="Message"
          id="message"
          {...register("message")}
          className="md:row-start-1 md:col-start-2 md:row-span-3"
        >
          {errors.message?.message && (
            <Message message={errors.message.message} success={success} />
          )}
        </TextArea>
        <button
          disabled={isSubmitting}
          className="col-span-full md:col-span-1 bg-yellow-400 rounded-md py-2 px-2"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

function TextField({
  title,
  id,
  className,
  children,
  ...props
}: { title: string } & ComponentProps<"input">) {
  return (
    <div className={cn(className, "grid gap-2")}>
      <label htmlFor={id} className="text-yellow-400 text-lg font-medium">
        {title}
      </label>
      <input
        {...props}
        className="rounded-sm border-2 border-gray-300 py-2 px-3 text-gray-200"
      />
      {children}
    </div>
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
    <div className={cn(className, "grid h-fit gap-2")}>
      <label htmlFor={id} className="text-yellow-400 text-lg font-medium">
        {title}
      </label>
      <textarea
        {...props}
        className="rounded-sm min-h-30 text-gray-200 border-2 border-gray-300 px-4 py-2"
      />
      {children}
    </div>
  )
}
