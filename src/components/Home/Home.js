import React, {FC} from 'react'

interface Props {

}

const Home: FC<Props> = props => {
    const {localization} = props
    return (
        <>
            <div className="container">
                child content
            </div>
        </>
    )
}
export default Home

