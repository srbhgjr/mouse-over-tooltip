import React, { useEffect, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface MouseOverTooltipProps {
  children?: ReactNode
}

export default function MouseOverTooltip(props: MouseOverTooltipProps) {
  const [className, setClassName] = useState<string | undefined>()

  useEffect(() => {
    setClassName(uuidv4().slice(0, 6))
  }, [])

  return <div className={className}>{props.children}</div>
}
