'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React from 'react';

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'right' | 'left';
  align?: 'start' | 'center' | 'end';
}

export const ActionTooltip = ({
  label,
  children,
  side,
  align,
} : ActionTooltipProps) => {

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{label.toLowerCase()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
