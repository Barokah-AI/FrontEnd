const featuresData = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M20 2C9.063 2 1 10.063 1 21s8.063 19 19 19 19-8.063 19-19S30.937 2 20 2zM20 32c-6.074 0-11-4.926-11-11s4.926-11 11-11 11 4.926 11 11-4.926 11-11 11z"
      />
      <path d="M20 10c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2s2-.896 2-2v-7c0-1.104-.896-2-2-2zM20 24c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
    </svg>
    ),
    title: "Quick and Precise Answers",
    paragraph:
      "Barokah-AI provides rapid and accurate responses to user inquiries.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M32 2H8C6.895 2 6 2.895 6 4v32c0 1.105.895 2 2 2h24c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zM8 4h24c.553 0 1 .447 1 1v30c0 .553-.447 1-1 1H8c-.553 0-1-.447-1-1V5c0-.553.447-1 1-1z"
      />
      <path d="M20 8c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zM20 14c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
    </svg>
    ),
    title: "Atificial Intelligence",
    paragraph:
      "Utilizes AI technology to deliver the necessary information.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M20 2C11.163 2 4 9.163 4 18v14c0 1.105.895 2 2 2h28c1.105 0 2-.895 2-2V18c0-8.837-7.163-16-16-16zM8 18c0-6.627 5.373-12 12-12s12 5.373 12 12v10H8V18z"
      />
      <path d="M20 10c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z" />
    </svg>
    ),
    title: "Advanced Features",
    paragraph:
      "Includes sophisticated functionalities designed to enhance user experience.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M2 8c0-1.105.895-2 2-2h32c1.105 0 2 .895 2 2v28c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V8zM4 6c-1.105 0-2 .895-2 2v28c0 1.105.895 2 2 2h32c1.105 0 2-.895 2-2V8c0-1.105-.895-2-2-2H4z"
      />
      <path d="M8 12h24v16H8V12z" />
    </svg>
    ),
    title: "User Friendly Interface",
    paragraph:
      "Offers an easy-to-navogate and intuitive platform",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M20 2c-4.418 0-8 3.582-8 8v8H8c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V20c0-1.104-.896-2-2-2h-4V10c0-4.418-3.582-8-8-8zM10 10c0-3.313 2.687-6 6-6s6 2.687 6 6v8H10V10zM8 20h24v14H8V20z"
      />
      <path d="M18 22h4v4h-4v-4zM18 28h4v4h-4v-4z" />
    </svg>
    ),
    title: "Safe and Reliable",
    paragraph:
      "Ensures a secure and dependable support environment.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M20 2C10.058 2 2 10.058 2 20s8.058 18 18 18 18-8.058 18-18S29.942 2 20 2zM18 27h-4v-4h4v4zm0-6h-4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4z"
      />
      <path d="M12 8h16v4H12V8zm-2 6h20v2H10v-2zm2 4h16v4H12v-4z" />
      </svg>
    ),
    title: "Knowledge Exploration",
    paragraph:
      "Facilitats The Discovery of new information and learning opportunities.",
  },
  {
    id: 7,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      <path
        opacity="0.5"
        d="M20 2C10.058 2 2 10.058 2 20s8.058 18 18 18 18-8.058 18-18S29.942 2 20 2zM18 27h-4v-4h4v4zm0-6h-4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4z"
      />
      <path d="M12 8h16v4H12V8zm-2 6h20v2H10v-2zm2 4h16v4H12v-4z" />
      </svg>
    ),
    title: "Knowledge Exploration",
    paragraph:
      "Facilitats The Discovery of new information and learning opportunities.",
  },
];

export default featuresData;
