"use client";

import { Calendar, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import StarsBackground from "./StarsBackground";
import { useActionState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { sendMessage } from "@/actions/sendMessage";
import { useToast } from "@/hooks/use-toast";
import {trackEvent} from "fathom-client"

const initialState = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState
  );
  const toast = useToast();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  useEffect(() => {
    console.log("State changed:", state);
    if (state.status === "success") {
      toast.toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
        variant: "default",
      });
    } else if (state.status === "error") {
      toast.toast({
        title: "Error",
        description: "There was an error sending your message.",
        variant: "destructive",
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <section id="contact" className="py-24 bg-space-darker relative">
      <StarsBackground numberOfStars={75} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2 className="section-heading text-center">Get in Touch</h2>
        <p className="section-subheading text-center mb-12">
          Ready to start your project? Reach out to us.
        </p>

        <div className="bg-space-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-space-darker border-gray-700 text-white"
                required
                name="name"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-space-darker border-gray-700 text-white"
                required
                name="email"
              />
            </div>

            <Textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="bg-space-darker border-gray-700 text-white"
              required
              name="message"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => trackEvent("Contact Form Submitted")}
                type="submit"
                disabled={pending}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-black cursor-pointer"
              >
                {pending ? (
                  <span className="flex gap-2 items-center">
                    <LoaderCircle className="animate-spin"/><span>Sending</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>

              <Button
                onClick={() => trackEvent("Book a Meeting")}
                variant="outline"
                type="button"
                className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10 cursor-pointer"
                data-cal-namespace="15min"
                data-cal-link="kochie/15min"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Meeting
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
