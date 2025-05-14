import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

const products = [
    { name: 'Quick SPA', price: '$500' },
    { name: 'Custom SPA', price: 'Starting at $1,150' },
    { name: 'Full Stack', price: 'Starting at $3,500' },
];

const features = [
    { label: 'Built from scratch', values: [false, true, true] },
    { label: 'Custom layout & structure', values: [false, true, true] },
    { label: 'Responsive & mobile-friendly', values: [true, true, true] },
    { label: 'SEO included', values: [true, true, true] },
    { label: 'Contact form + notifications', values: [true, true, true] },
    { label: 'Code delivery via GitHub', values: [true, true, true] },
    { label: 'Full backend functionality', values: [false, false, true] },
    { label: 'HIPAA-ready infrastructure', values: [false, false, 'Optional'] },
    { label: 'Scalable to full stack', values: [true, true, 'N/A'] },
    { label: 'Estimated timeline', values: ['7–10 days', '3-4 weeks', '8-12 weeks'] },
];

export default function ProductComparison() {
    return (
        <Box sx={{ py: 10, backgroundColor: 'grey.100' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" fontWeight={600} align="center" gutterBottom>
                    Compare Products
                </Typography>

                <Box sx={{ overflowX: 'auto', mt: 4 }}>
                    <TableContainer
                        component={Paper}
                        elevation={3}
                        sx={{
                            minWidth: 600,
                            borderRadius: 2,
                            boxShadow: 4,
                            overflow: 'hidden',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <Table size="small">
                            <TableHead sx={{ backgroundColor: 'grey.50' }}>
                                <TableRow>
                                    <TableCell />
                                    {products.map((product) => (
                                        <TableCell key={product.name} align="center">
                                            <Typography variant="subtitle1" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.price}
                                            </Typography>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {features.map((row, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{
                                            '&:nth-of-type(odd)': { backgroundColor: 'grey.100' },
                                            '& td': { borderBottom: '1px solid', borderColor: 'divider' },
                                        }}
                                    >
                                        <TableCell>
                                            <Typography variant="body2" fontWeight={500}>
                                                {row.label}
                                            </Typography>
                                        </TableCell>
                                        {row.values.map((val, j) => (
                                            <TableCell key={j} align="center">
                                                {typeof val === 'boolean' ? (
                                                    val ? '✔️' : '—'
                                                ) : (
                                                    <Typography variant="body2">{val}</Typography>
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
}
