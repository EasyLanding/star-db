import React from 'react';
import { SwapiServiceConsumer } from '../swapi-servece-context/swapi-servece-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) =>
{

    return (props) =>
    {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) =>
                    {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return (
                            <Wrapped { ...props } { ...serviceProps } />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withSwapiService;