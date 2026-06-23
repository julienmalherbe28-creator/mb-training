"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { contactContent } from "@/content/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { fields, success, error } = contactContent.form;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      goal: (form.elements.namedItem("goal") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <span className="text-5xl">✅</span>
        <h2 className="font-bebas text-3xl text-brand-dark">{success.title}</h2>
        <p className="font-inter text-gray-600 max-w-md">{success.message}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 font-inter text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-150 bg-white";

  const labelClass = "block font-inter text-sm font-medium text-gray-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            {fields.firstName} <span className="text-brand-orange">*</span>
          </label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className={inputClass} placeholder="Julien" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            {fields.lastName} <span className="text-brand-orange">*</span>
          </label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className={inputClass} placeholder="Dupont" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {fields.email} <span className="text-brand-orange">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="julien@exemple.fr" />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>{fields.phone}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="06 XX XX XX XX" />
      </div>

      <div>
        <label htmlFor="goal" className={labelClass}>{fields.goal}</label>
        <select id="goal" name="goal" className={`${inputClass} cursor-pointer`} defaultValue="">
          {fields.goalOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {fields.message} <span className="text-brand-orange">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder={fields.messagePlaceholder} />
      </div>

      {status === "error" && (
        <p className="font-inter text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? fields.submitting : fields.submit}
      </Button>

      <p className="font-inter text-xs text-gray-400 text-center">
        Vos données ne sont pas revendues ni partagées.
      </p>
    </form>
  );
}
