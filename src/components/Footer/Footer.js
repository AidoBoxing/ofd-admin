import React from "react";
import Marquee from 'react-double-marquee';

export function FooComponent() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '68px',
                width: '100%',
                whiteSpace: 'nowrap',
                color: 'white',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '17px',
                lineHeight: '17px',
                margin: '25px'
            }}
        >
            <Marquee>
                Будьте отважны. Рискуйте. Ничто не заменит вам опыта.
                Только упорный труд дает желаемый результат.
                Чтобы начать, нужно перестать говорить и взяться за дело.
            </Marquee>
        </div>
    );
}