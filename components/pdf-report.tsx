'use client'

import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

interface Transaction {
  id: string
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
}

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', backgroundColor: '#fcfcfc' },
  header: { borderBottomWidth: 2, borderBottomColor: '#862fe7', paddingBottom: 10, marginBottom: 20 },
  title: { fontSize: 24, color: '#111827', fontWeight: 'bold' },
  subtitle: { fontSize: 10, color: '#6b7589', marginTop: 4 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 14, color: '#862fe7', marginBottom: 10, fontWeight: 'bold' },
  grid: { display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 15 },
  kpiCard: { flex: 1, padding: 10, backgroundColor: '#f1f5f9', borderRadius: 8, borderWidth: 1, borderColor: '#d8e0ea' },
  kpiLabel: { fontSize: 8, color: '#6b7589', textTransform: 'uppercase', marginBottom: 2 },
  kpiValue: { fontSize: 14, color: '#111827', fontWeight: 'bold' },
  table: { display: 'flex', flexDirection: 'column', borderWidth: 1, borderColor: '#d8e0ea', borderRadius: 6, overflow: 'hidden' },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#d8e0ea', padding: 8, alignItems: 'center' },
  tableHeader: { backgroundColor: '#f8fafc' },
  tableCol: { flex: 1, fontSize: 9, color: '#3f4654' },
  tableColHeader: { flex: 1, fontSize: 9, color: '#111827', fontWeight: 'bold' },
  footer: { position: 'absolute', bottom: 30, left: 40, right: 40, borderTopWidth: 1, borderTopColor: '#d8e0ea', paddingTop: 10, textAlign: 'center', fontSize: 8, color: '#94a3b8' },
})

export default function MyPDFReport({
  transactions,
  kpis,
}: {
  transactions: Transaction[]
  kpis: { totalIncome: number; totalExpense: number; netProfit: number }
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Reporte de Comercio Electrónico</Text>
          <Text style={styles.subtitle}>
            CET115-2016 — Generado el: {new Date().toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumen Financiero (KPIs)</Text>
          <View style={styles.grid}>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Ingresos</Text>
              <Text style={styles.kpiValue}>${kpis.totalIncome.toFixed(2)}</Text>
            </View>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Egresos</Text>
              <Text style={styles.kpiValue}>${kpis.totalExpense.toFixed(2)}</Text>
            </View>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Flujo Neto</Text>
              <Text style={styles.kpiValue}>${kpis.netProfit.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Historial de Transacciones</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableColHeader}>Fecha</Text>
              <Text style={styles.tableColHeader}>Descripción</Text>
              <Text style={styles.tableColHeader}>Categoría</Text>
              <Text style={styles.tableColHeader}>Tipo</Text>
              <Text style={styles.tableColHeader}>Monto</Text>
            </View>
            {transactions.slice(0, 15).map((t) => (
              <View key={t.id} style={styles.tableRow}>
                <Text style={styles.tableCol}>{t.date}</Text>
                <Text style={styles.tableCol}>{t.description}</Text>
                <Text style={styles.tableCol}>{t.category}</Text>
                <Text style={styles.tableCol}>
                  {t.type === 'income' ? 'Ingreso' : 'Egreso'}
                </Text>
                <Text style={styles.tableCol}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.footer}>
          Documento académico emitido para la materia Comercio Electrónico (CET115-2016). Licencia MIT.
        </Text>
      </Page>
    </Document>
  )
}
