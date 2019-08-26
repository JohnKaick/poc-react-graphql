import React from 'react'
import InputMask from 'react-input-mask';
import { Input, Icon } from 'antd'

export default (props) => (
    <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
        {(inputProps) => <Input prefix={<Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />} {...inputProps} />}
    </InputMask>
)