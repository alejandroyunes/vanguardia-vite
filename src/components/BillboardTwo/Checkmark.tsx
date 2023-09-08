export default function Checkmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      id="check-mark-circle"
      data-name="Flat Line"
      className="icon flat-line"
    >
      <rect
        id="secondary"
        x="3"
        y="3"
        width="18"
        height="18"
        rx="9"
        style={{ fill: '#ae3c43', strokeWidth: 2 }}
      />
      <polyline
        id="primary"
        points="8 11.5 11 14.5 16 9.5"
        style={{
          fill: 'none',
          stroke: '#031027',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <rect
        id="primary-2"
        data-name="primary"
        x="3"
        y="3"
        width="18"
        height="18"
        rx="9"
        style={{
          fill: 'none',
          stroke: 'rgb(0, 0, 0)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 0,
        }}
      />
    </svg>
  );
}
