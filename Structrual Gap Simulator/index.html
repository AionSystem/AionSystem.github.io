import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine } from 'recharts';

const C = {
  bg: '#0A1F33',
  panel: '#0D2A47',
  panelBorder: '#1E3A5C',
  grid: '#1B3350',
  reported: '#7FDBFF',
  adjusted: '#FF7A45',
  alert: '#E63946',
  ink: '#EAF2FB',
  inkDim: '#8AA2BC',
};

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');`;

const dowData = [
  { year: 1990, sum: 1643, divisor: 0.586, djia: 2810 },
  { year: 1991, sum: 1318, divisor: 0.505, djia: 2610 },
  { year: 1992, sum: 1782, divisor: 0.559, djia: 3172 },
  { year: 1993, sum: 1535, divisor: 0.463, djia: 3301 },
  { year: 1994, sum: 1675, divisor: 0.447, djia: 3754 },
  { year: 1995, sum: 1425, divisor: 0.372, djia: 3834 },
  { year: 1996, sum: 1770, divisor: 0.346, djia: 5117 },
  { year: 1997, sum: 2100, divisor: 0.325, djia: 6448 },
  { year: 1998, sum: 1985, divisor: 0.251, djia: 7902 },
  { year: 1999, sum: 2228, divisor: 0.243, djia: 9181 },
  { year: 2000, sum: 2317, divisor: 0.201, djia: 11497 },
];

const fixedDivisor = dowData[0].divisor;

// "reported" uses Grommen's own published DJIA figure directly, not a recomputation,
// so this line matches his source table exactly. Only the counterfactual is computed.
const indexSeries = dowData.map((d) => ({
  year: d.year,
  reported: d.djia,
  heldConstant: Math.round(d.sum / fixedDivisor),
}));

// Decade-end Dow Divisor, 1940-2010, from Grommen's "The present crisis, a pattern" (2013), Table 1.
// Spans both the second and third industrial revolutions, showing the same collapse recurring twice.
const divisorTrend = [
  { decade: 1940, divisor: 15.1 },
  { decade: 1950, divisor: 9.06 },
  { decade: 1960, divisor: 3.824 },
  { decade: 1970, divisor: 1.894 },
  { decade: 1980, divisor: 1.465 },
  { decade: 1990, divisor: 0.586 },
  { decade: 2000, divisor: 0.201 },
  { decade: 2010, divisor: 0.132 },
];

function GapGauge({ label, pct, sublabel }) {
  const capped = Math.min(Math.max(pct, 0), 200);
  const overflow = pct > 200;
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6, gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.08em', color: C.inkDim, textTransform: 'uppercase' }}>{label}</span>
        <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 22, fontWeight: 700, color: C.alert }}>
          {overflow ? '200%+' : `${pct.toFixed(0)}%`}
        </span>
      </div>
      <div style={{ height: 10, background: '#08192B', borderRadius: 2, overflow: 'hidden', border: `1px solid ${C.panelBorder}` }}>
        <div
          style={{
            width: `${(capped / 200) * 100}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${C.adjusted}, ${C.alert})`,
            transition: 'width 0.25s ease',
          }}
        />
      </div>
      {sublabel && (
        <div style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 11.5, color: C.inkDim, marginTop: 6, lineHeight: 1.4 }}>{sublabel}</div>
      )}
    </div>
  );
}

function ratingInfo(debtToEbitda) {
  if (debtToEbitda < 2) return { label: 'Investment grade (~A/BBB)', color: C.reported };
  if (debtToEbitda < 3.5) return { label: 'Crossover (~BBB/BB)', color: C.adjusted };
  if (debtToEbitda < 5) return { label: 'High yield (~BB/B)', color: C.alert };
  return { label: 'Distressed (~CCC or below)', color: C.alert };
}

function Slider({ label, value, min, max, step, onChange, format }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 12, color: C.inkDim }}>{label}</span>
        <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: C.ink }}>{format ? format(value) : value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: C.adjusted }}
      />
    </div>
  );
}

export default function StructuralGapSimulator() {
  const [scrubYear, setScrubYear] = useState(2000);
  const scrubPoint = indexSeries.find((d) => d.year === scrubYear) || indexSeries[indexSeries.length - 1];
  const indexGapPct = ((scrubPoint.reported - scrubPoint.heldConstant) / scrubPoint.heldConstant) * 100;

  const [debt, setDebt] = useState(20);
  const [ebitda, setEbitda] = useState(15);
  const [jvSpvDebt, setJvSpvDebt] = useState(15);
  const [circularFin, setCircularFin] = useState(10);

  const reportedDebtEbitda = debt / ebitda;
  const adjustedDebtEbitda = (debt + jvSpvDebt + circularFin) / ebitda;
  const financeGapPct = ((adjustedDebtEbitda - reportedDebtEbitda) / reportedDebtEbitda) * 100;
  const reportedRating = ratingInfo(reportedDebtEbitda);
  const adjustedRating = ratingInfo(adjustedDebtEbitda);

  const leverageBarData = [
    { name: 'Reported', value: Number(reportedDebtEbitda.toFixed(2)) },
    { name: 'Adjusted', value: Number(adjustedDebtEbitda.toFixed(2)) },
  ];

  const [maturityProfile, setMaturityProfile] = useState('concentrated');
  const offBalanceTotal = jvSpvDebt + circularFin;
  const maturityWeights = maturityProfile === 'concentrated' ? [0.1, 0.15, 0.5, 0.15, 0.1] : [0.2, 0.2, 0.2, 0.2, 0.2];
  const maturityData = maturityWeights.map((w, i) => ({
    year: `Year ${i + 1}`,
    amount: Math.round(offBalanceTotal * w * 100) / 100,
  }));
  const peakMaturityYear = maturityData.reduce((a, b) => (b.amount > a.amount ? b : a), maturityData[0]);

  return (
    <div
      style={{
        background: C.bg,
        minHeight: '100%',
        padding: '24px 16px 48px',
        fontFamily: '"IBM Plex Sans", sans-serif',
        color: C.ink,
        backgroundImage: `linear-gradient(${C.grid} 1px, transparent 1px), linear-gradient(90deg, ${C.grid} 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }}
    >
      <style>{FONT_IMPORT}</style>

      <div
        style={{
          border: `1px solid ${C.panelBorder}`,
          background: C.panel,
          padding: '16px 20px',
          marginBottom: 24,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 12,
          maxWidth: 980,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.inkDim, letterSpacing: '0.1em' }}>DOCUMENT</div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 17, fontWeight: 700 }}>STRUCTURAL GAP SIMULATOR</div>
        </div>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.inkDim, letterSpacing: '0.1em' }}>DATA / BUILD</div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13 }}>W. GROMMEN (data) — S. K. SALMON (build)</div>
        </div>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.inkDim, letterSpacing: '0.1em' }}>REV</div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13 }}>01</div>
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ border: `1px solid ${C.panelBorder}`, background: C.panel, padding: 20 }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: C.reported, letterSpacing: '0.08em', marginBottom: 4 }}>
            MECHANISM 01
          </div>
          <h2 style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 19, margin: '0 0 4px' }}>Index Reconstruction</h2>
          <p style={{ fontSize: 13, color: C.inkDim, margin: '0 0 16px', maxWidth: 640 }}>
            Real Dow Jones data, 1990 to 2000, from Grommen's published tables. The reported line is his own published
            DJIA figure for each year. The held-constant line asks what the index would show if the 1990 divisor had
            never changed.
          </p>

          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <LineChart data={indexSeries} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid stroke={C.grid} />
                <XAxis dataKey="year" stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <YAxis stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <Tooltip contentStyle={{ background: '#08192B', border: `1px solid ${C.panelBorder}` }} labelStyle={{ color: C.ink }} />
                <Line type="monotone" dataKey="reported" name="Reported Index" stroke={C.reported} strokeWidth={2.5} dot={false} />
                <Line
                  type="monotone"
                  dataKey="heldConstant"
                  name="Divisor Held at 1990"
                  stroke={C.adjusted}
                  strokeWidth={2.5}
                  strokeDasharray="5 3"
                  dot={false}
                />
                <ReferenceDot x={scrubYear} y={scrubPoint.reported} r={5} fill={C.reported} stroke="none" />
                <ReferenceDot x={scrubYear} y={scrubPoint.heldConstant} r={5} fill={C.adjusted} stroke="none" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <Slider label="SCRUB YEAR" value={scrubYear} min={1990} max={2000} step={1} onChange={setScrubYear} />

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, marginBottom: 4 }}>
            <span style={{ color: C.reported }}>REPORTED: {scrubPoint.reported.toLocaleString()}</span>
            <span style={{ color: C.adjusted }}>HELD CONSTANT: {scrubPoint.heldConstant.toLocaleString()}</span>
          </div>

          <GapGauge
            label="Structural gap, index level"
            pct={indexGapPct}
            sublabel={`${scrubYear}: ${indexGapPct.toFixed(0)}% of the reported index level traces to divisor and basket changes, not share price growth.`}
          />

          <div style={{ marginTop: 20, borderTop: `1px dashed ${C.panelBorder}`, paddingTop: 16 }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.reported, letterSpacing: '0.08em', marginBottom: 6 }}>
              THE LONGER PATTERN — DOW DIVISOR, 1940–2010
            </div>
            <p style={{ fontSize: 12.5, color: C.inkDim, margin: '0 0 10px', lineHeight: 1.5 }}>
              The same collapse recurring across both the second and third industrial revolutions, not just the single
              decade above. Log scale, since the divisor falls by two orders of magnitude.
            </p>
            <div style={{ width: '100%', height: 160 }}>
              <ResponsiveContainer>
                <LineChart data={divisorTrend} margin={{ top: 4, right: 12, left: -12, bottom: 0 }}>
                  <CartesianGrid stroke={C.grid} />
                  <XAxis dataKey="decade" stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 10 }} />
                  <YAxis scale="log" domain={['auto', 'auto']} stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: '#08192B', border: `1px solid ${C.panelBorder}` }} labelStyle={{ color: C.ink }} />
                  <Line type="monotone" dataKey="divisor" name="Dow Divisor" stroke={C.reported} strokeWidth={2} dot={{ r: 3, fill: C.reported }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p style={{ fontSize: 11, color: C.inkDim, margin: '6px 0 0' }}>
              Source: Grommen, "The present crisis, a pattern," 2013, Table 1.
            </p>
          </div>

          <div style={{ marginTop: 20, borderTop: `1px dashed ${C.panelBorder}`, paddingTop: 16 }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.alert, letterSpacing: '0.08em', marginBottom: 6 }}>
              DOWNSIDE CASE — OCT 1929
            </div>
            <p style={{ fontSize: 13, color: C.inkDim, margin: 0, lineHeight: 1.5 }}>
              The mechanism runs in both directions. The Dow peaked at 381 points on September 3, 1929, built on a
              divisor that had shrunk to 10.47 as splitting, accelerating shares kept getting added. After the crash,
              18 of 30 companies were purged and the divisor was reset upward to 15.1: the same lever that inflates a
              boom on the way up exaggerates a bust on the way down once it snaps back. Source: Grommen, "The present
              crisis, a pattern," 2013.
            </p>
          </div>

          <div style={{ marginTop: 20, borderTop: `1px dashed ${C.panelBorder}`, paddingTop: 16 }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.alert, letterSpacing: '0.08em', marginBottom: 6 }}>
              FAILURE NODE — SEP 23, 2013
            </div>
            <p style={{ fontSize: 13, color: C.inkDim, margin: 0, lineHeight: 1.5 }}>
              HP, Bank of America, and Alcoa (combined value $44, 2.2% of the index) were replaced by Goldman Sachs, Nike,
              and Visa (combined value $415, 17.7% of the index). A 10% move in the new lineup adds roughly 7.9x more
              index points than the same move in the old lineup would have. Source: Grommen, "Humanity at Crossroads," 2017.
            </p>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.panelBorder}`, background: C.panel, padding: 20 }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: C.adjusted, letterSpacing: '0.08em', marginBottom: 4 }}>
            MECHANISM 02
          </div>
          <h2 style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 19, margin: '0 0 4px' }}>Off-Balance-Sheet Financing</h2>
          <p style={{ fontSize: 13, color: C.inkDim, margin: '0 0 16px', maxWidth: 640 }}>
            Illustrative model of a generic AI infrastructure company. Not tied to any real company's actual
            financials — built to show the mechanism, not to forecast or accuse. Most operating leases have been
            on-balance-sheet since ASC 842 and IFRS 16 (2019), so the mechanism modeled here is the one that isn't:
            unconsolidated joint ventures and special-purpose vehicles, structured so the parent isn't deemed the
            primary beneficiary under VIE accounting rules and the debt doesn't consolidate onto its books, plus
            circular vendor financing layered on top.
          </p>

          <Slider label="ON-BALANCE-SHEET DEBT ($B)" value={debt} min={10} max={40} step={1} onChange={setDebt} format={(v) => `$${v}B`} />
          <Slider label="ANNUAL EBITDA ($B)" value={ebitda} min={5} max={30} step={1} onChange={setEbitda} format={(v) => `$${v}B`} />
          <Slider
            label="UNCONSOLIDATED JV / SPV DEBT ($B)"
            value={jvSpvDebt}
            min={0}
            max={40}
            step={1}
            onChange={setJvSpvDebt}
            format={(v) => `$${v}B`}
          />
          <Slider
            label="CIRCULAR VENDOR FINANCING ($B)"
            value={circularFin}
            min={0}
            max={30}
            step={1}
            onChange={setCircularFin}
            format={(v) => `$${v}B`}
          />

          <div style={{ display: 'flex', gap: 32, marginTop: 16, marginBottom: 8, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.inkDim }}>REPORTED DEBT/EBITDA</div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 28, fontWeight: 700, color: C.reported }}>
                {reportedDebtEbitda.toFixed(2)}x
              </div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, color: reportedRating.color, marginTop: 2 }}>
                {reportedRating.label}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.inkDim }}>STRUCTURALLY ADJUSTED</div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 28, fontWeight: 700, color: C.adjusted }}>
                {adjustedDebtEbitda.toFixed(2)}x
              </div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, color: adjustedRating.color, marginTop: 2 }}>
                {adjustedRating.label}
              </div>
            </div>
          </div>
          <p style={{ fontSize: 11, color: C.inkDim, margin: '0 0 4px' }}>
            Rating buckets are a rough, illustrative rule of thumb (roughly how leverage ranges map to agency rating
            categories), not a real agency methodology.
          </p>

          <div style={{ width: '100%', height: 140, marginTop: 8 }}>
            <ResponsiveContainer>
              <BarChart data={leverageBarData} layout="vertical" margin={{ top: 20, right: 16, left: 8, bottom: 0 }}>
                <CartesianGrid stroke={C.grid} horizontal={false} />
                <XAxis type="number" stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 10 }} />
                <YAxis type="category" dataKey="name" stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} width={70} />
                <Tooltip contentStyle={{ background: '#08192B', border: `1px solid ${C.panelBorder}` }} labelStyle={{ color: C.ink }} />
                <ReferenceLine
                  x={3.5}
                  stroke={C.alert}
                  strokeDasharray="4 3"
                  label={{ value: '~3.5x typical infra benchmark', position: 'top', fill: C.alert, fontFamily: 'IBM Plex Mono', fontSize: 10 }}
                />
                <Bar dataKey="value" radius={[0, 3, 3, 0]}>
                  {leverageBarData.map((d, i) => (
                    <Cell key={i} fill={d.name === 'Reported' ? C.reported : C.adjusted} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p style={{ fontSize: 10.5, color: C.inkDim, margin: '4px 0 0' }}>
            3.5x is a rough, commonly cited rule of thumb for stable infrastructure/utility-type leverage, not a
            sourced sector statistic.
          </p>

          <GapGauge
            label="Structural gap, Debt/EBITDA"
            pct={financeGapPct}
            sublabel="The gap is debt that behaves like debt but isn't counted like debt, until a credit rating or a refinancing depends on it."
          />

          <div style={{ marginTop: 20, borderTop: `1px dashed ${C.panelBorder}`, paddingTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.adjusted, letterSpacing: '0.08em' }}>
                MATURITY LADDER — WHEN IT COMES DUE
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['concentrated', 'laddered'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setMaturityProfile(mode)}
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: 10.5,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '4px 10px',
                      border: `1px solid ${C.panelBorder}`,
                      background: maturityProfile === mode ? C.adjusted : 'transparent',
                      color: maturityProfile === mode ? '#08192B' : C.inkDim,
                      cursor: 'pointer',
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 12.5, color: C.inkDim, margin: '0 0 10px', lineHeight: 1.5 }}>
              {`The same total obligation ($${offBalanceTotal}B), spread two different ways across five years. Concentration risk isn't the dollar amount, it's whether it all comes due at once.`}
            </p>
            <div style={{ width: '100%', height: 160 }}>
              <ResponsiveContainer>
                <BarChart data={maturityData} margin={{ top: 4, right: 12, left: -12, bottom: 0 }}>
                  <CartesianGrid stroke={C.grid} />
                  <XAxis dataKey="year" stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 10 }} />
                  <YAxis stroke={C.inkDim} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: '#08192B', border: `1px solid ${C.panelBorder}` }} labelStyle={{ color: C.ink }} />
                  <Bar dataKey="amount" radius={[3, 3, 0, 0]}>
                    {maturityData.map((d, i) => (
                      <Cell key={i} fill={maturityProfile === 'concentrated' && d.year === peakMaturityYear.year ? C.alert : C.adjusted} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.panelBorder}`, background: C.panel, padding: 20 }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: C.alert, letterSpacing: '0.08em', marginBottom: 4 }}>
            DIAGNOSTIC
          </div>
          <h2 style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 19, margin: '0 0 12px' }}>Red Flags Checklist</h2>
          <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Off-balance-sheet or non-consolidated debt growing faster than revenue.',
              "Circular financing between counterparties: a supplier invests in a customer who commits to buying that same supplier's product.",
              "Frequent changes to an index or benchmark's composition, clustered in the same direction as a sector's current momentum.",
              'Debt maturities clustering in a narrow window rather than spread evenly across years.',
              'Credit-default-swap spreads widening while equity valuations keep climbing, a sign the two markets disagree.',
              'Valuations that depend on continued monetary accommodation (rate cuts, QE) rather than on standalone fundamentals.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 13, color: C.inkDim, lineHeight: 1.5 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ border: `1px solid ${C.panelBorder}`, padding: '16px 20px' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: C.inkDim, letterSpacing: '0.08em', marginBottom: 8 }}>
            METHODOLOGY & SOURCES
          </div>
          <p style={{ fontSize: 12, color: C.inkDim, margin: '0 0 6px', lineHeight: 1.5 }}>
            <strong style={{ color: C.reported }}>Mechanism 01</strong> is built entirely from Wim Grommen's published
            data: "The present crisis, a pattern" (2013) and "Humanity at Crossroads" (2017). Every input figure (the
            DJIA values, the divisor table) is his own published number. The held-constant counterfactual is computed
            from those inputs, not a figure he published himself.
          </p>
          <p style={{ fontSize: 12, color: C.inkDim, margin: '0 0 6px', lineHeight: 1.5 }}>
            <strong style={{ color: C.adjusted }}>Mechanism 02</strong> models a real, currently reported financing
            pattern (unconsolidated JVs/SPVs, circular vendor financing) using illustrative numbers. No figure in
            that panel describes any specific real company.
          </p>
          <p style={{ fontSize: 12, color: C.inkDim, margin: 0, lineHeight: 1.5 }}>
            Rating buckets and the infrastructure benchmark line are rough, commonly cited rules of thumb, not agency
            methodology or a sourced sector statistic.
          </p>
        </div>

        <div style={{ border: `1px solid ${C.panelBorder}`, padding: '16px 20px', textAlign: 'center' }}>
          <p style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, color: C.ink, margin: 0, lineHeight: 1.5 }}>
            Two mechanisms. One shape of failure: a number treated as continuous that is quietly resting on a foundation
            nobody's checked.
          </p>
        </div>
      </div>
    </div>
  );
}
