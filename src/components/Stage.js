import React from 'react'
import { css } from '@emotion/core'

export const Stage = ({ stageNumber }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;
      font-size: 14px;
    `}
  >
    {getStageMessage(stageNumber)}
  </div>
)

const getStageMessage = stageNumber => {
  switch (stageNumber) {
    case 1:
      return '🤔 This entry is still just an idea - it might be totally changed or removed in the future.'
    case 2:
      return '📜 This entry is still getting together the permits required - expect changes in the future.'
    case 3:
      return '🚧 This entry is still under construction - the frame is there, but the details might be rearranged.'
    case 4:
    default:
      return '🏛 This entry is open for business - it is unlikely to be changed or updated.'
  }
}
