import React from 'react'

const Loader = ({loading}) => {


        return (
            <div className="loader center">
                    { loading && 
                                <div className="loading">
                                        <i className="fa fa-spinner fa-spin" />
                                        <span>Loading...</span>
                                </div> }
            </div>
        )
}
export default Loader
