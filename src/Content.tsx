import { ReactNode } from "react";

const myCompany = {
  name: "BearStudio",
  url: "https://bearstudio.fr",
};

const myGitHub = {
  name: "GitHub",
  url: "https://github.com/HugoPerard",
};

const mySocialMedias = [
  {
    name: "Twitter",
    url: "https://twitter.com/Hugo_Prd98",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hugoperard/",
  },
];

const Link = ({ children, url }: { children: ReactNode; url: string }) => (
  <a
    style={{ textDecoration: "underline", color: "white" }}
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export const Content = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        background: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          padding: 6,
          borderRadius: 6,
        }}
      >
        <h1 style={{ fontSize: 40, marginBottom: 10 }}>I'm Hugo Pérard</h1>
        <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 60 }}>
          Web developer at <Link url={myCompany.url}>{myCompany.name}</Link>
        </h2>
        <div>
          <p style={{ margin: 0, marginBottom: 4 }}>
            Follow me on{" "}
            <Link url={mySocialMedias[0].url}>{mySocialMedias[0].name}</Link>{" "}
            and{" "}
            <Link url={mySocialMedias[1].url}>{mySocialMedias[1].name}</Link>
          </p>
          <p style={{ margin: 0, marginBottom: 2 }}>
            See my projects on <Link url={myGitHub.url}>{myGitHub.name}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
