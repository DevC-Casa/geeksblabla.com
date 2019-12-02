import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import FacebookPlayer from "./FacebookPlayer"
import Loader from "../Loader"
import mdxComponents from "../mdx"

import "./index.scss"
import VideoPlaceHolder from "../Images/VideoPlaceHolder"

export default class Episode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: !!props.placeholder,
    }
  }

  onReady = () => {
    this.setState({ ready: true })
  }
  onError = () => {
    console.log("facebook video player error ")
    this.setState({ ready: true })
  }

  render() {
    const {
      title,
      slug,
      date,
      duration,
      placeholder,
      label,
      video,
      description,
      repoLink,
      excerpt,
      ...props
    } = this.props
    const { ready } = this.state

    return (
      <div className="episode" {...props}>
        {label && <span className="label"> last Episode </span>}
        {!ready && <Loader />}
        {placeholder ? (
          <Link to={`/${slug}`}>
            <VideoPlaceHolder />
          </Link>
        ) : (
          <FacebookPlayer
            videoId={video}
            onReady={this.onReady}
            onError={this.onError}
          />
        )}

        <div
          className={!placeholder ? "info placeholder" : "info"}
          style={{
            visibility: `${ready ? "visible" : "hidden"}`,
          }}
        >
          <div className="title">
            <h2> {title} </h2>
            <h5> {duration} </h5>
          </div>
          <div className="markdown-description">
            {!placeholder && (
              <React.Fragment>
                <MDXProvider components={mdxComponents}>
                  <MDXRenderer>{description}</MDXRenderer>
                </MDXProvider>
                <div
                  style={{
                    marginTop: 20,
                    alignItems: "flex-end",
                    color: "#d9127b",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    style={{
                      cursor: "pointer",
                      fontSize: 16,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={repoLink}
                  >
                    Edit Notes
                  </a>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
}
