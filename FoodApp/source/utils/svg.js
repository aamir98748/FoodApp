import React from 'react';
import Svg, {
  Path,
  G,
  Circle,
  Rect,
  Line,
  Text,
  Defs,
  TSpan,
  Image,
  Use,
  Mask,
  Polygon,
  Ellipse,
  LinearGradient,
  Stop,
  // ClipPath,
} from 'react-native-svg';

export const BackArrowSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G fill="none">
      <Path data-name="Rectangle 631" d="M0 0h22v22H0z" />
      <Path
        data-name="Path 2"
        d="M19 11H4"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.5}
        fill="#fff"
      />
      <Path
        data-name="Path 3"
        d="m8 6-5 5 5 5"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </G>
  </Svg>
);
export const LocationPinSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} {...props}>
    <Path
      d="M4.985 13.293c-2.4 0-4.985-.78-4.985-2.492 0-1.245 1.4-2.15 3.739-2.421v.843c-1.74.22-2.908.853-2.908 1.578 0 .916 1.864 1.661 4.154 1.661s4.154-.745 4.154-1.661c0-.724-1.169-1.358-2.908-1.578v-.844C8.573 8.65 9.97 9.555 9.97 10.8c0 1.713-2.584 2.493-4.985 2.493Zm.415-2.494h-.83V5.773a2.922 2.922 0 0 1-1.774-.96 2.882 2.882 0 0 1-.718-1.905 2.908 2.908 0 0 1 5.816 0 2.881 2.881 0 0 1-.719 1.905 2.924 2.924 0 0 1-1.774.96v5.026ZM4.154.829a.831.831 0 1 0 .831.831.832.832 0 0 0-.83-.83Z"
      fill="#fff"
    />
  </Svg>
);
export const FilterSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} {...props}>
    <G
      data-name="Group 816"
      transform="translate(-31.5 -155.5)"
      fill="none"
      stroke="#1d7452">
      <G data-name="Group 823">
        <Circle cx={2} cy={2} r={2} transform="translate(35 156)" />
        <Path d="M32 158h3" strokeLinecap="round" strokeLinejoin="round" />
        <Path
          data-name="Vector"
          d="M39 158h9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Circle
        data-name="Ellipse"
        cx={2}
        cy={2}
        r={2}
        transform="translate(35 166)"
      />
      <Path
        data-name="Vector"
        d="M32 168h3M39 168h9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        data-name="Ellipse"
        cx={2}
        cy={2}
        r={2}
        transform="translate(41 161)"
      />
      <Path
        data-name="Vector"
        d="M32 163h9M45 163h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export const SearchSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} {...props}>
    <G
      data-name="Group 6"
      transform="translate(-279.5 -155.5)"
      fill="none"
      stroke={props.fill}>
      <Circle cx={6.067} cy={6.067} transform="translate(280 156)" r={6.067} />
      <Path
        data-name="Line 3"
        d="m290.615 166.148 3.385 3.385"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export const CuisineSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} {...props}>
    <G fill="none">
      <Path d="m5.655 13.553-2.354-1.57h18.83l-2.354 1.57Zm.009-3.923a6.53 6.53 0 0 1 5.768-6.171 1.569 1.569 0 1 1 2.586 0 6.53 6.53 0 0 1 5.769 6.171Z" />
      <Path
        d="m19.777 13.553 2.354-1.57H3.301l2.354 1.57h14.122m.01-3.923c0-3.075-2.487-5.633-5.77-6.172a1.568 1.568 0 1 0-2.586 0c-3.281.54-5.767 3.097-5.767 6.172h14.123m.293 4.923H5.352L0 10.983h25.434l-5.354 3.57Zm.707-3.923H4.664v-1c0-3.169 2.253-5.925 5.497-6.902A2.572 2.572 0 0 1 12.726 0a2.572 2.572 0 0 1 2.563 2.729c3.245.976 5.498 3.733 5.498 6.902v1Z"
        fill="#1d7452"
      />
      <Path
        data-name="Vector 12"
        d="m12.332 4.923-3.53.392-1.177 3.139"
        stroke="#1d7452"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export const BookmarkSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={14} {...props}>
    <Path
      data-name="Rectangle 82"
      d="M.5.5h9v13L5 10.25.5 13.5Z"
      fill="none"
      stroke={props.fill}
      strokeLinejoin="round"
    />
  </Svg>
);
export const DownSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={10} {...props}>
    <Path
      data-name="arrow1 copy 2"
      d="M7.914 4.38 4.385 7.92.855 4.38"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1998199999999999}
    />
  </Svg>
);
export const RightSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={12} {...props}>
    <Path
      d="m5.086.856 4.249 4.235-4.25 4.235"
      fill="none"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1998199999999999}
    />
  </Svg>
);
export const OfferSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={18} {...props}>
    <Path
      d="M8.051.34A2.136 2.136 0 0 0 7.534.3H1.458c-.114 0-.225 0-.319.008A.911.911 0 0 0 .792.4.9.9 0 0 0 .4.792a.911.911 0 0 0-.092.347C.3 1.233.3 1.344.3 1.458v6.076a2.136 2.136 0 0 0 .04.517 1.353 1.353 0 0 0 .171.4 2.136 2.136 0 0 0 .346.386L7.9 15.571c.168.161.314.3.443.4a1.375 1.375 0 0 0 .464.264 1.353 1.353 0 0 0 .824-.009 1.375 1.375 0 0 0 .458-.274c.127-.108.269-.25.434-.415l5.022-5.022c.165-.165.307-.307.415-.434a1.375 1.375 0 0 0 .274-.458 1.353 1.353 0 0 0 .006-.823 1.375 1.375 0 0 0-.264-.464c-.1-.129-.244-.275-.4-.443L8.837.857A2.136 2.136 0 0 0 8.451.51a1.353 1.353 0 0 0-.4-.17ZM7.5 1.2a1.673 1.673 0 0 1 .339.013.451.451 0 0 1 .133.057 1.673 1.673 0 0 1 .244.236l6.7 7c.176.184.289.3.369.4a.511.511 0 0 1 .1.161.451.451 0 0 1 0 .275.511.511 0 0 1-.106.158c-.081.1-.2.212-.377.392l-5 5c-.18.18-.3.3-.392.377a.511.511 0 0 1-.158.106.451.451 0 0 1-.275 0 .511.511 0 0 1-.161-.1c-.1-.079-.216-.193-.4-.369l-7-6.7a1.673 1.673 0 0 1-.236-.244.451.451 0 0 1-.057-.133A1.673 1.673 0 0 1 1.2 7.5V1.207h.272Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.6}
    />
  </Svg>
);
export const WatchSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} {...props}>
    <G fill="none">
      <Path d="M5.5 0h13v13h-13Z" />
      <Path
        data-name="Vector"
        d="M16.875 6.5A4.875 4.875 0 1 1 12 1.625 4.875 4.875 0 0 1 16.875 6.5Z"
        stroke={props.fill}
      />
      <Path
        data-name="Vector"
        d="M12 3.656V6.5h2.844"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        data-name="Line 4"
        stroke={props.fill}
        strokeLinecap="round"
        d="M5.5 5h-5"
      />
      <Path
        data-name="Line 6"
        stroke={props.fill}
        strokeLinecap="round"
        d="M6.5 3h-3"
      />
    </G>
  </Svg>
);
export const BikeSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G transform="translate(-160.5 -434.5)">
      <G
        data-name="Ellipse 3"
        transform="rotate(180 84.019 222.778)"
        fill="none"
        stroke="#fff">
        <Circle cx={2.463} cy={2.463} r={2.463} stroke="none" />
        <Circle cx={2.463} cy={2.463} r={1.963} />
      </G>
      <G
        data-name="Ellipse 5"
        transform="rotate(180 90 222.778)"
        fill="none"
        stroke="#fff">
        <Circle cx={2.463} cy={2.463} r={2.463} stroke="none" />
        <Circle cx={2.463} cy={2.463} r={1.963} />
      </G>
      <Circle
        data-name="Ellipse 4"
        cx={0.352}
        cy={0.352}
        r={0.352}
        transform="rotate(180 82.963 221.722)"
        fill="#fff"
      />
      <Path
        data-name="Line 3"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        d="m177.962 442.702-2.258-4.147"
      />
      <Path
        data-name="Vector 1"
        d="M169.796 443.796h1.759a2.8 2.8 0 0 0 2.815-2.463v-2.463"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
      />
      <Path
        data-name="Vector 3"
        d="M167.334 442.037h3.394c.911 0 3.187.151 3.643-1.056v-1.759"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
      />
      <Path
        data-name="Vector 2"
        d="m170.852 437.815 1.056-1.056h2.111l.352.7 2.111-.7v2.111h-2.111a4.675 4.675 0 0 0-2.463.7 3.645 3.645 0 0 1-2.463 1.059c-1.255 0-1.525-1.056-3.167-1.056h-1.407"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
      />
      <Path
        data-name="Line 4"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        d="M166.63 437.815H161"
      />
      <Path
        data-name="Line 6"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        d="M167.334 436.407h-3.519"
      />
      <Path
        data-name="Line 7"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        d="M165.926 435h-3.519"
      />
    </G>
  </Svg>
);
export const StarSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} {...props}>
    <Path
      d="M6.688 4.882a.774.774 0 0 0-.208.668l.258 1.566A.747.747 0 0 1 6.024 8a.7.7 0 0 1-.337-.088l-1.35-.74a.7.7 0 0 0-.674 0l-1.35.74A.7.7 0 0 1 1.976 8a.747.747 0 0 1-.714-.884L1.52 5.55a.774.774 0 0 0-.208-.668L.219 3.773a.763.763 0 0 1 .4-1.287l1.51-.228a.726.726 0 0 0 .545-.413L3.351.42a.712.712 0 0 1 1.3 0l.675 1.425a.726.726 0 0 0 .545.413l1.51.228a.763.763 0 0 1 .4 1.287Z"
      fill="#fff"
    />
  </Svg>
);
export const CartSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path d="M.125 0h28v28h-28Z" fill="none" />
    <Path
      data-name="Vector"
      d="M10.625 23.625a1.75 1.75 0 1 1-1.75-1.75 1.75 1.75 0 0 1 1.75 1.75ZM22 23.625a1.75 1.75 0 1 1-1.75-1.75 1.75 1.75 0 0 1 1.75 1.75Z"
      fill="#300b3a"
    />
    <Path
      data-name="Vector"
      d="M4.75 7.875h19.625l-2.887 10.106A1.75 1.75 0 0 1 19.8 19.25H9.32a1.75 1.75 0 0 1-1.683-1.269L3.681 4.135A.875.875 0 0 0 2.84 3.5H1"
      fill="none"
      stroke="#300b3a"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
export const ShareSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G fill="none" stroke="#fff" strokeWidth={1.5}>
      <Path data-name="Rectangle 632" d="M7.75 5.28h-7v14h14v-7"
        stroke={props.fill} />
      <Path
        data-name="Path 2"
        d="m7.444 12.849 8.327-8.327"
        strokeLinecap="round"stroke={props.fill}
      />
      <Path
        data-name="Path 3"
        d="M16.478 8.887V3.816h-5.071"
        strokeLinecap="round"
        strokeLinejoin="round"stroke={props.fill}
      />
    </G>
  </Svg>
);
export const MinusSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path d="M5.754 0v1.344H0V0Z" fill="#9719b9" />
  </Svg>
);
export const PlusSymbol = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}>
    <Path
      d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0z"
      style={{
        fill: '#f95329',
      }}
    />
    <Path
      d="M368 277.3h-90.7V368c0 11.8-9.6 21.3-21.3 21.3s-21.3-9.6-21.3-21.3v-90.7H144c-11.8 0-21.3-9.6-21.3-21.3s9.6-21.3 21.3-21.3h90.7V144c0-11.8 9.6-21.3 21.3-21.3s21.3 9.6 21.3 21.3v90.7H368c11.8 0 21.3 9.6 21.3 21.3s-9.5 21.3-21.3 21.3z"
      style={{
        fill: '#fafafa',
      }}
    />
  </Svg>
);
export const InfoSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} {...props}>
    <Path d="M0 0h14v14H0Z" fill="none" />
    <Path
      data-name="Vector"
      d="M12.25 7A5.25 5.25 0 1 1 7 1.75 5.25 5.25 0 0 1 12.25 7Z"
      fill="none"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      data-name="Vector"
      d="M6.563 6.563h.438v3.063h.437"
      fill="none"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      data-name="Vector"
      d="M7.657 4.594A.656.656 0 1 1 7 3.938a.656.656 0 0 1 .657.656Z"
      stroke={props.fill}
    />
  </Svg>
);
export const MessageSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G fill="none">
      <Path d="M0 0h22v22H0Z" />
      <Path
        data-name="Vector"
        d="M6.702 17.303 3.88 19.676a.688.688 0 0 1-1.13-.527V5.501a.688.688 0 0 1 .688-.688h15.125a.687.687 0 0 1 .687.688v11a.687.687 0 0 1-.687.688H7.019ZM8.25 9.625h5.5M8.25 12.375h5.5"
        stroke="#8f9b9c"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export const DeleteSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      d="M5.143 5.141v5.906a.325.325 0 0 1-.321.328h-.643a.325.325 0 0 1-.321-.328V5.141a.325.325 0 0 1 .321-.328h.643a.325.325 0 0 1 .321.328Zm2.679-.328h-.643a.325.325 0 0 0-.321.328v5.906a.325.325 0 0 0 .321.328h.643a.325.325 0 0 0 .321-.328V5.141a.325.325 0 0 0-.322-.328Zm3.536-2.625a.65.65 0 0 1 .642.656v.328a.325.325 0 0 1-.321.328h-.536v9.188A1.3 1.3 0 0 1 9.857 14H2.143a1.3 1.3 0 0 1-1.286-1.312V3.5H.321A.325.325 0 0 1 0 3.172v-.328a.65.65 0 0 1 .643-.656h1.993L3.547.637A1.3 1.3 0 0 1 4.016.17 1.265 1.265 0 0 1 4.65 0h2.7a1.265 1.265 0 0 1 .633.17 1.3 1.3 0 0 1 .469.467l.911 1.55Zm-7.222 0h3.729l-.467-.8a.162.162 0 0 0-.059-.058.158.158 0 0 0-.079-.021H4.741a.158.158 0 0 0-.079.021.162.162 0 0 0-.059.058ZM9.857 3.5H2.143v9.023a.166.166 0 0 0 .047.116.159.159 0 0 0 .114.048H9.7a.159.159 0 0 0 .114-.048.166.166 0 0 0 .047-.116Z"
      fill="#f5512f"
    />
  </Svg>
);
export const RunningStarSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} {...props}>
    <G fill="none" stroke="#1d7452">
      <Path d="M15.86 6.6a.968.968 0 0 0-.261.835l.323 1.965a.933.933 0 0 1-.892 1.1.874.874 0 0 1-.422-.111l-1.687-.924a.876.876 0 0 0-.843 0l-1.688.924a.874.874 0 0 1-.42.111.933.933 0 0 1-.892-1.1L9.4 7.438a.968.968 0 0 0-.26-.838L7.774 5.217a.954.954 0 0 1 .5-1.609l1.887-.285a.907.907 0 0 0 .682-.516l.845-1.782a.89.89 0 0 1 1.624 0l.844 1.781a.907.907 0 0 0 .682.516l1.887.285a.954.954 0 0 1 .5 1.609Z" />
      <Path data-name="Line 4" strokeLinecap="round" d="M6.13 4.5H.5" />
      <Path data-name="Line 6" strokeLinecap="round" d="M7.019 2.5H3.5" />
    </G>
  </Svg>
);
export const CorrectSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      d="M8.5 0a8.51 8.51 0 1 0 6.008 2.492A8.5 8.5 0 0 0 8.5 0Zm4.048 7.012-4.8 4.577a.656.656 0 0 1-.9 0L4.452 9.3a.654.654 0 0 1 .9-.946L7.3 10.211l4.343-4.146a.654.654 0 0 1 .9.946Z"
      fill="#fff"
    />
  </Svg>
);
// export const Symbol = props => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
//     <Path
//       d="M4.985 13.293c-2.4 0-4.985-.78-4.985-2.492 0-1.245 1.4-2.15 3.739-2.421v.843c-1.74.22-2.908.853-2.908 1.578 0 .916 1.864 1.661 4.154 1.661s4.154-.745 4.154-1.661c0-.724-1.169-1.358-2.908-1.578v-.844C8.573 8.65 9.97 9.555 9.97 10.8c0 1.713-2.584 2.493-4.985 2.493Zm.415-2.494h-.83V5.773a2.922 2.922 0 0 1-1.774-.96 2.882 2.882 0 0 1-.718-1.905 2.908 2.908 0 0 1 5.816 0 2.881 2.881 0 0 1-.719 1.905 2.924 2.924 0 0 1-1.774.96v5.026ZM4.154.829a.831.831 0 1 0 .831.831.832.832 0 0 0-.83-.83Z"
//       fill="#fff"
//     />
//   </Svg>
// );
// export const Symbol = props => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
//     <Path
//       d="M4.985 13.293c-2.4 0-4.985-.78-4.985-2.492 0-1.245 1.4-2.15 3.739-2.421v.843c-1.74.22-2.908.853-2.908 1.578 0 .916 1.864 1.661 4.154 1.661s4.154-.745 4.154-1.661c0-.724-1.169-1.358-2.908-1.578v-.844C8.573 8.65 9.97 9.555 9.97 10.8c0 1.713-2.584 2.493-4.985 2.493Zm.415-2.494h-.83V5.773a2.922 2.922 0 0 1-1.774-.96 2.882 2.882 0 0 1-.718-1.905 2.908 2.908 0 0 1 5.816 0 2.881 2.881 0 0 1-.719 1.905 2.924 2.924 0 0 1-1.774.96v5.026ZM4.154.829a.831.831 0 1 0 .831.831.832.832 0 0 0-.83-.83Z"
//       fill="#fff"
//     />
//   </Svg>
// );
// export const Symbol = props => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
//     <Path
//       d="M4.985 13.293c-2.4 0-4.985-.78-4.985-2.492 0-1.245 1.4-2.15 3.739-2.421v.843c-1.74.22-2.908.853-2.908 1.578 0 .916 1.864 1.661 4.154 1.661s4.154-.745 4.154-1.661c0-.724-1.169-1.358-2.908-1.578v-.844C8.573 8.65 9.97 9.555 9.97 10.8c0 1.713-2.584 2.493-4.985 2.493Zm.415-2.494h-.83V5.773a2.922 2.922 0 0 1-1.774-.96 2.882 2.882 0 0 1-.718-1.905 2.908 2.908 0 0 1 5.816 0 2.881 2.881 0 0 1-.719 1.905 2.924 2.924 0 0 1-1.774.96v5.026ZM4.154.829a.831.831 0 1 0 .831.831.832.832 0 0 0-.83-.83Z"
//       fill="#fff"
//     />
//   </Svg>
// );
