import { createSelector } from 'reselect'
import { RootState } from '../../options/types'

export const onboarding = (state: RootState) => state.onboarding

export const annotationStage = createSelector(
    onboarding,
    state => state.annotationStage,
)
export const powerSearchStage = createSelector(
    onboarding,
    state => state.powerSearchStage,
)
export const taggingStage = createSelector(
    onboarding,
    state => state.taggingStage,
)
export const backupStage = createSelector(
    onboarding,
    state => state.backupStage,
)
export const showOnboardingBox = createSelector(
    onboarding,
    state => state.showOnboardingBox,
)
export const congratsMessage = createSelector(
    onboarding,
    state => state.congratsMessage,
)
