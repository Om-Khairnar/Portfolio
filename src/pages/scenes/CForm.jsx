import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function CForm() {
  const [state, handleSubmit] = useForm("xwkgjlgd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <form target="_blank" onSubmit={handleSubmit}>
      <input
        className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
        id="name"
        type="name"
        name="name"
        placeholder="NAME"
      />
        <input
          className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
          id="email"
          type="email"
          name="email"
          placeholder="EMAIL"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
          id="message"
          name="message"
          placeholder="MESSAGE"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 rounded-full"
          type="submit"
          disabled={state.submitting}
        >
          SEND ME A MESSAGE
        </button>
      </form>
    </div>
  );
}

export default CForm;
