import styled from 'styled-components';
import { CountryMap } from '../../../common/CountryMap/CountryMap';

export const DoctorsMap = styled(CountryMap)`
  // Leaflet uses z-index inside. Create a new stacking context for avoiding overlapping
  isolation: isolate;
  height: 19rem;

  &.leaflet-container {
    background: ${(props) => props.theme.colors.dashboardMap.background};
    border-radius: ${(props) => props.theme.border.radius};

    svg {
      path {
        stroke: transparent;
        fill: url(#map-background);
        fill-opacity: 1;

        &:hover {
          fill: url(#map-background-hovered);
        }
      }
    }

    #pattern-circle {
      fill: ${(props) => props.theme.colors.dashboardMap.circleColor};
    }

    #pattern-circle-hovered {
      fill: ${(props) => props.theme.colors.main.primary};
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-marker-icon {
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.main.primary};
  }

  .leaflet-control-zoom {
    border: 0;

    &.leaflet-control a {
      line-height: 1.625rem;
      border: 0;
      border-radius: 0.5rem;
    }
  }

  .leaflet-control-zoom-out,
  .leaflet-control-zoom-in {
    background-color: ${(props) => props.theme.colors.main.primary};
    color: ${(props) => props.theme.colors.text.secondary};

    &:hover {
      background-color: ${(props) => props.theme.colors.main.mainBackground};
      color: ${(props) => props.theme.colors.main.primary};
    }

    &.leaflet-disabled {
      background-color: ${(props) => props.theme.colors.dashboardMap.controlDisabledBackgroundColor};
      color: ${(props) => props.theme.colors.text.secondary};
    }
  }

  .leaflet-control-zoom-in {
    margin-bottom: 0.5rem;
  }
`;
