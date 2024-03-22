import { useState } from 'react'

const ConverterForm = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [gradleConfig, setGradleConfig] = useState('implementation')

  const convertMavenToGradle = (input: string) => {
    const groupIdMatch = input.match(/<groupId>(.*?)<\/groupId>/)
    const artifactIdMatch = input.match(/<artifactId>(.*?)<\/artifactId>/)
    const versionMatch = input.match(/<version>(.*?)<\/version>/)

    if (!groupIdMatch || !artifactIdMatch || !versionMatch) {
      return 'Invalid Maven input'
    }

    const groupId = groupIdMatch[1]
    const artifactId = artifactIdMatch[1]
    const version = versionMatch[1]

    return `${gradleConfig} '${groupId}:${artifactId}:${version}'`.trim()
  }

  const convertGradleToMaven = (input: string) => {
    const parts = input.split("'")[1]?.split(':')
    if (!parts || parts.length !== 3) {
      return 'Invalid Gradle input'
    }

    const [groupId, artifactId, version] = parts

    return `<dependency>
      <groupId>${groupId}</groupId>
      <artifactId>${artifactId}</artifactId>
      <version>${version}</version>
</dependency>`
  }

  const handleConversion = () => {
    if (input.includes('<dependency>')) {
      setOutput(convertMavenToGradle(input))
    } else {
      setOutput(convertGradleToMaven(input))
    }
  }

  return (
    <div className="container">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Maven or Gradle dependencies" />
      {input.includes('<dependency>') && (
        <div>
          <label>
            Gradle Configuration:
            <select value={gradleConfig} onChange={(e) => setGradleConfig(e.target.value)}>
              <option value="implementation">implementation</option>
              <option value="api">api</option>
              <option value="compileOnly">compileOnly</option>
              <option value="testImplementation">testImplementation</option>
            </select>
          </label>
        </div>
      )}
      <button onClick={handleConversion}>Convert</button>
      <textarea value={output} readOnly className="output" />
    </div>
  )
}

export default ConverterForm
