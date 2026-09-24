import ClosingStatement from "./ClosingStatement"
import FounderPhoto from "./FounderPhoto"

const ClosureSection = () => {
    return (
        <section aria-labelledby="closure-title" className="mx-auto mt-24 grid max-w-6xl grid-cols-1 items-start px-4 md:mt-28 md:grid-cols-12 md:px-8 lg:mt-32">
            <FounderPhoto />
            <ClosingStatement />
        </section>
    )
}

export default ClosureSection
