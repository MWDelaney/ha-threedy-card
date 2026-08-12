import { HomeAssistant, ThreedyConfig } from "../types";

const normalizeProgress = (value: any) => {
    const numeric = Number(value);

    if (!Number.isFinite(numeric)) return 0;

    return Math.min(100, Math.max(0, numeric));
}

const absoluteThumbnailUrl = (
    hass: HomeAssistant,
    rawUrl: string
) => {
    if (!rawUrl) return undefined;

    if (/^https?:\/\//i.test(rawUrl) || /^data:/i.test(rawUrl)) {
        return rawUrl;
    }

    if (rawUrl.startsWith('/') && typeof hass.hassUrl === 'function') {
        return hass.hassUrl(rawUrl);
    }

    return rawUrl;
}

const resolveThumbnailUrl = (
    hass: HomeAssistant,
    config: ThreedyConfig
) => {
    const sourceEntityId = config.thumbnail_entity;
    if (!sourceEntityId) return undefined;

    const sourceEntity = hass.states[sourceEntityId];
    if (!sourceEntity) return undefined;

    const configuredAttr = config.thumbnail_attribute;
    const candidate = (
        (configuredAttr ? sourceEntity.attributes?.[configuredAttr] : undefined) ||
        sourceEntity.attributes?.entity_picture ||
        sourceEntity.attributes?.thumbnail ||
        sourceEntity.attributes?.url ||
        sourceEntity.state
    );

    if (typeof candidate !== 'string' || candidate.trim().length === 0) {
        return undefined;
    }

    return absoluteThumbnailUrl(hass, candidate.trim());
}

export {
    normalizeProgress,
    resolveThumbnailUrl
}
