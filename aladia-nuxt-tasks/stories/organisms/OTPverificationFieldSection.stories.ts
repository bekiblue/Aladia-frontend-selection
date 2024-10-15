import OTPverificationFieldSection from "../../components/organisms/OTPverificationFieldSection.vue";
import OTPInputGroup from "../../components/molecules/OTPInputGroup.vue";
import TextLink from "../../components/atoms/TextLink.vue";
import Button from "../../components/atoms/Button.vue";

export default {
  title: "Organisms/OTPverificationFieldSection",
  component: OTPverificationFieldSection,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Desktop version
export const Desktop = () => ({
  components: { OTPverificationFieldSection, OTPInputGroup, TextLink, Button },
  template: `
    <OTPverificationFieldSection />
  `,
  parameters: {
    viewport: {
      defaultViewport: "responsive", // For desktop view
    },
  },
});

// Mobile version
export const Mobile = () => ({
  components: { OTPverificationFieldSection, OTPInputGroup, TextLink, Button },
  template: `
    <OTPverificationFieldSection />
  `,
  parameters: {
    viewport: {
      defaultViewport: "iphonex", // For mobile view
    },
  },
});
